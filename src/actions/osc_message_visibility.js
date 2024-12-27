const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("../lib/OSCClient");

module.exports = function(parameter) {
    var visible = String(parameter.visible);

    logIt('DEBUG', 'Static Message visibility: ' + visible);
    
    var newMessage = new OSCMessage('/presentation/message/visible');
    newMessage.addIntegerParameter(visible == "Show" ? 1 : 0);

    OSCClient.send(newMessage);
}