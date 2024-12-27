const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {
    var languageNumber = (+parameter.languageNumber).toFixed(0);

    logIt('DEBUG', 'set language ' + languageNumber + ' as primary language');
    
    var newMessage = new OSCMessage('/presentation/primarylanguage');
    newMessage.addByteParameter(languageNumber);

    OSCClient.send(newMessage);
}