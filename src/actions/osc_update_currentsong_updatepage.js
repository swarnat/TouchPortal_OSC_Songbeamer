const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'Show Background');
    
    var newMessage = new OSCMessage('/subscribe');
    newMessage.addStringParameter('/presentation/page');
    newMessage.addIntegerParameter(1);

    OSCClient.send(newMessage);
    // OSCClient.send('/presentation/state', 'background');
}