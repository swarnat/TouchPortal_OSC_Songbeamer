const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'Show Background');
    
    var newMessage = new OSCMessage('/presentation/state');
    newMessage.addStringParameter('background');

    OSCClient.send(newMessage);
    // OSCClient.send('/presentation/state', 'background');
}