const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("../lib/OSCClient");

module.exports = function(parameter) {
    var text = String(parameter.text);

    logIt('DEBUG', 'send text ' + text);
    
    var newMessage = new OSCMessage('/presentation/message/text');
    newMessage.addStringParameter(text);

    OSCClient.send(newMessage);

}