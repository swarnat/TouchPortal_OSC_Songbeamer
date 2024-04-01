const TP = require("touchportal-api");
var requireDir = require('require-dir');

const logIt = require("./logIt");
const OSCClient = require("../lib/OSCClient");
const parseParameter = require("./parseParameter");

const TPClient = new TP.Client();

module.exports = TPClient;

var oscAvailableActions = requireDir(__dirname + "/../actions");

logIt('INFO', 'Available Actions:');
logIt('INFO', "\n" + Object.keys(oscAvailableActions).join("\n"));

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
  
/*
  TPClient.stateUpdateMany([
    {
        id: 'songbeamer_current_page',
        value: '12'
    }
  ]);   
*/

  OSCClient.connect(data[0]['Songbeamer OSC IP'], data[1]['Songbeamer OSC Port']);

  

});

TPClient.on("Update", (curVersion, newVersion) => {
  logIt("DEBUG",curVersion, newVersion);
});

TPClient.on("Close", (data) => {
  logIt("WARN","Closing due to TouchPortal sending closePlugin message");
  TPClient.settingUpdate(PLUGIN_CONNECTED_SETTING,"Disconnected");
});



module.exports = TPClient;