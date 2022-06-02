const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'next page');
    
    var newMessage = new OSCMessage('/presentation/nextpage');
    newMessage.addIntegerParameter(1);

    OSCClient.send(newMessage);
    // OSCClient.send('/presentation/state', 'background');
}