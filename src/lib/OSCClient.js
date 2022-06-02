const logIt = require('../helper/logIt');

var OSCClient = null;
var OSCClientReady = false;

var osc = require("osc");

/**
 * {string} All OSC messages are send to this host
 */
var currentHost = '127.0.0.1';

/**
 * {string} All OSC messages are send to this port
 */
var currentPort = '';

/**
 * {int} This port will be open and listing for OSC responses
 */
var localPort = 52017;

/**
 * {function|bool} When a function, then a incoming message will call this callback
 */
var currentCallback = false;

module.exports = {
    /**
     * Set current Host and Port to send OSC messages to
     * 
     * @param {string} host 
     * @param {int} port 
     */
    connect: function(host, port) {
        logIt("DEBUG","OSC Client: Connect to Server " + host + ":" + port);

        currentHost = host;
        currentPort = port;

        OSCClient = new osc.UDPPort({
            metadata: true,
            localAddress: "0.0.0.0",
            localPort: localPort            
        });

        OSCClient.open();

        OSCClient.on("ready", function () {
            logIt('INFO', 'OSC Client is ready')            
            OSCClientReady = true;

            OSCClient.on("osc", function (package) {
                if(typeof currentCallback === 'function') {
                    console.log('Forward response to callback');

                    currentCallback(package);
                    currentCallback = false;
                }
                
            });            
        });

    },

    /**
     * 
     * @param {OSCMessage} message The message, which should be send to OSC Server
     * @param {function} callback [optional] Will be able to handle a response from OSC Server directly after this call
     */
    send: function(message, callback) {
        currentCallback = callback;

        if(OSCClient === null || OSCClientReady === false) throw 'OSC Client not connected or ready';

        OSCClient.send({
            address: message.getPath(),
            args: message.getArguments()
        }, currentHost, currentPort);
    }
}