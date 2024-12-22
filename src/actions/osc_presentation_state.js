const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("../lib/OSCClient");

module.exports = function(parameter) {
    var visible = String(parameter.visible);

    logIt('DEBUG', 'Set presentation visibility: ' + visible);
    
    var newMessage = new OSCMessage('/presentation/permanentblack');
    newMessage.addIntegerParameter(visible == "Hidden" ? 1 : 0);

    OSCClient.send(newMessage);
}