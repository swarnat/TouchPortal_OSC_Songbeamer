const logIt = require("../helper/logIt");
const OSCClient = require("./../lib/OSCClient");
const OSCMessage = require("../lib/OSCMessage");

module.exports = function(parameter) {

    logIt('DEBUG', 'Show Logo');

    var newMessage = new OSCMessage('/presentation/state');
    newMessage.addStringParameter('logo');

    OSCClient.send(newMessage);
}