const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'next playlist entry');
    
    var newMessage = new OSCMessage('/playlist/next');
    newMessage.addIntegerParameter(1);

    OSCClient.send(newMessage);
    // OSCClient.send('/presentation/state', 'background');

}