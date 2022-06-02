const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {

    logIt('DEBUG', 'Show Page');

    var newMessage = new OSCMessage('/presentation/state');
    newMessage.addStringParameter('page');

    OSCClient.send(newMessage);
}