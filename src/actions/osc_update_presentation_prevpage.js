const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'Previous Page');
    
    var newMessage = new OSCMessage('/presentation/prevpage');
    newMessage.addIntegerParameter(1);

    OSCClient.send(newMessage);
    // OSCClient.send('/presentation/state', 'background');
}