const TP = require("touchportal-api");

const PLUGIN_CONNECTED_SETTING = 'Plugin Connected';

//const scopes = ["identify", "rpc"];

var requireDir = require('require-dir');
const parseParameter = require("./helper/parseParameter");

const OSCClient = require("./lib/OSCClient");

const logIt = require("./helper/logIt");
const config = require("./config");

var oscAvailableActions = requireDir(__dirname + "/actions");

logIt('INFO','Available Actions:');
logIt('INFO',Object.keys(oscAvailableActions).join(', '));

const TPClient = new TP.Client();

TPClient.on("Action", async (message) => {

  var parameter = {};

  if(message.data && message.data.length > 0) {
    parameter = parseParameter(message.data);
  }

  if(typeof oscAvailableActions[message.actionId] === 'function') {
    oscAvailableActions[message.actionId](parameter);
  }

});

TPClient.on("ListChange", async (data) => {
    logIt("DEBUG","ListChange :" + JSON.stringify(data));
});

TPClient.on("Info", (data) => {
  logIt("DEBUG","Info : We received info from Touch-Portal");
  // console.log(data);  
});

TPClient.on("Settings", (data) => {
  logIt("DEBUG","Settings: New Settings from Touch-Portal ");

  OSCClient.connect(data[0]['OSC IP'], data[1]['OSC Port']);
});

TPClient.on("Update", (curVersion, newVersion) => {
  logIt("DEBUG",curVersion, newVersion);
});

TPClient.on("Close", (data) => {
  logIt("WARN","Closing due to TouchPortal sending closePlugin message");
  TPClient.settingUpdate(PLUGIN_CONNECTED_SETTING,"Disconnected");
});
// - END - TP

function isEmpty(val) {
  return val === undefined || val === null || val === '';
}



// That way if TP shuts down the plugin will be shutdown too
TPClient.connect({ 
  pluginId: config.pluginId, 
  updateUrl: config.updateUrl 
});
