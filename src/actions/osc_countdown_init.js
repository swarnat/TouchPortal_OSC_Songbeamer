const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("../lib/OSCClient");

module.exports = function(parameter) {
    var timer = String(parameter.timer);

    logIt('DEBUG', 'Countdown currently not working');
    // logIt('DEBUG', 'send countdown init ' + timer);
    
    var newMessage = new OSCMessage('/stage/layout/timerinit');
    newMessage.addTimecodeParameter(timer);

    OSCClient.send(newMessage);
    
}