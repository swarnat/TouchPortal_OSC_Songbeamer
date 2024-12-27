const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");

module.exports = function(parameter) {
    var language1 = parameter["lang-1"] == "On";
    var language2 = parameter["lang-2"] == "On";
    var language3 = parameter["lang-3"] == "On";
    var language4 = parameter["lang-4"] == "On";

    var languageString = []
    console.log(parameter);
    if(language1) languageString.push(1);
    if(language2) languageString.push(2);
    if(language3) languageString.push(3);
    if(language4) languageString.push(4);

    logIt('DEBUG', 'show languages: ' + languageString.join(""));
    
    var newMessage = new OSCMessage('/presentation/languages');
    newMessage.addStringParameter(languageString.join(""));

    OSCClient.send(newMessage);
}