const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {
    var page = (+parameter.page).toFixed(0);

    logIt('DEBUG', 'open page ' + page);
    
    var newMessage = new OSCMessage('/presentation/page');
    newMessage.addIntegerParameter(page);

    OSCClient.send(newMessage);
}