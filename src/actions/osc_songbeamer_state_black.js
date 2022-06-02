const logIt = require("../helper/logIt");
const OSCClient = require("./../lib/OSCClient");
const OSCMessage = require("../lib/OSCMessage");

module.exports = function(parameter) {

    logIt('DEBUG', 'Show Black');    

    var newMessage = new OSCMessage('/presentation/state');
    newMessage.addStringParameter('black');

    OSCClient.send(newMessage);
}