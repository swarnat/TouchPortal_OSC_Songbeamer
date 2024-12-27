const logIt = require("../helper/logIt");
var requireDir = require("require-dir");

var OSCClient = null;
var OSCClientReady = false;

var osc = require("osc");
const OSCMessage = require("./OSCMessage");

/**
 * {string} All OSC messages are send to this host
 */
var currentHost = "127.0.0.1";

/**
 * {string} All OSC messages are send to this port
 */
var currentPort = "";

/**
 * {int} This port will be open and listing for OSC responses
 */
var localPort = 52017;

/**
 * {function|bool} When a function, then a incoming message will call this callback
 */
var callbacks = [];

/**
 * {function|bool} When a function, expect an incoming message will call this callback
 */
var onetimeCallbacks = {};

/**
 * Allow to check if callback is already registered
 */
var callbackIds = {};

var subscribeHeartbeat = false;

function registerCallback(callbackId, oscAddress, callback) {
  if (callbackIds[callbackId] === undefined) {
    logIt("Register callback to address: " + oscAddress);

    let oscPathRegex = new RegExp(oscAddress);

    callbacks.push({
      address: oscPathRegex,
      handler: callbackId,
    });

    callbackIds[callbackId] = callback;
  }
}

function sendMessage(message, callback) {
  if (callback) {
    onetimeCallbacks[message.getPath()] = callback;
  }

  if (OSCClient === null || OSCClientReady === false)
    throw "OSC Client not connected or ready";

  OSCClient.send(
    {
      address: message.getPath(),
      args: message.getArguments(),
    },
    currentHost,
    currentPort
  );
}

module.exports = {
  /**
   * Set current Host and Port to send OSC messages to
   *
   * @param {string} host
   * @param {int} port
   */
  connect: function (host, port) {
    logIt("DEBUG", "OSC Client: Connect to Server " + host + ":" + port);

    if (OSCClient) {
      try {
        OSCClient.close();
        delete OSCClient;
      } catch (e) {
        // Ignore
      }
    }

    currentHost = host;
    currentPort = port;

    OSCClient = new osc.UDPPort({
      localAddress: "127.0.0.1",
      remoteAddress: currentHost,
      remotePort: +currentPort,
      localPort: +localPort,
      broadcast: true,
      metadata: true,
    });

    OSCClient.on("close", () => {
      if (subscribeHeartbeat) {
        clearInterval(subscribeHeartbeat);
        delete subscribeHeartbeat;
      }
    });

    OSCClient.on("error", (err) => {
      logIt("ERROR", "Error: " + err.message);

      if (subscribeHeartbeat) {
        clearInterval(subscribeHeartbeat);
        delete subscribeHeartbeat;
      }
    });

    OSCClient.on("ready", () => {
      logIt("INFO", "OSC Client is ready");
      OSCClientReady = true;

    //   OSCClient.on("message", function (package) {
    //     console.log(package);
    //   });
      OSCClient.on("osc", (package) => {
        var foundReceiver = false;
        
        for (var index in callbacks) {
          var receiver = callbacks[index];

          if (package.address.match(receiver.address)) {
            // logIt("DEBUG", 'Receiver of ' + package.address + ' found');
            foundReceiver = true;

            const handler = callbackIds[receiver.handler];
            handler(package);
          }
        }

        if (typeof onetimeCallbacks[package.address] !== "undefined") {
          onetimeCallbacks[package.address](package);
          delete onetimeCallbacks[package.address];

          foundReceiver = true;
        }

        if (foundReceiver === false) {
          logIt("NOT found Receiver of address " + package.address + "");
        }
      });

    //   this.heartbeat = setInterval(() => {
    //     this.xremote();
    //   }, 9500);
      
      // this.xremote();
      requireDir(__dirname + "/../receiver");
    });

    logIt("INFO", "Open UDP Port")
    OSCClient.open();
    logIt("DEBUG", "OSC Client: Connect to Server " + host + ":" + port);
  },

  xremote: function () {

    logIt("DEBUG", "OSC Client: Register /xremote");
    var newMessage = new OSCMessage("/xremote");
    sendMessage(newMessage);

  },

  /**
   * Send a /subscribe message, like used in many implementations
   * Will be send every 10 seconds, because a /subscribe call expire after 10 seconds
   *
   * @param string address
   * @param handler callable
   * @param integer interval How many seconds between messages [default: 5 seconds]
   */
  subscribe: function (subscribeId, oscAddress, handler, interval) {
    if (interval === undefined) interval = 5;

    registerCallback(subscribeId, oscAddress, (package) => {
      handler(package);
    });

    function register() {
      logIt("DEBUG", "subscribe to " + oscAddress);

      const newMessage = new OSCMessage("/subscribe");
      newMessage.addStringParameter(oscAddress);
      newMessage.addIntegerParameter(interval);

      sendMessage(newMessage);
    }

    register();
    setInterval(register, 10000);
  },

  /**
   *
   * @param {OSCMessage} message The message, which should be send to OSC Server
   * @param {function} callback [optional] Will be able to handle a response from OSC Server directly after this call
   */
  send: sendMessage,

  on: registerCallback,

  isRegistered: function (callbackId) {
    return callbackIds[callbackId] !== undefined;
  },
};
