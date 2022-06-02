const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'update video state: ' + parameter.state);
    
    var newMessage = new OSCMessage('/video/state');
    newMessage.addStringParameter(parameter.state);

    OSCClient.send(newMessage);
}