const { basename } = require("path");

const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");
const TPClient = require("../helper/TPClient");


const newMessage = new OSCMessage('/info');

OSCClient.on("info", "/info", function(package) {

    TPClient.stateUpdate('songbeamer_version', package.args[3].value);
    
})
OSCClient.send(newMessage)


