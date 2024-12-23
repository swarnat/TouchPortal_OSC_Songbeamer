const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("../lib/OSCClient");
const TPClient = require("./TPClient");
const PromiseSender = require("./PromiseSender");

module.exports = async function() {
    
    
    var countMessage = new OSCMessage('/presentation/pagecount');
    const response = await PromiseSender(countMessage)

    TPClient.stateUpdate('songbeamer_slides_count', response.args[0].value);

    // TPClient.stateUpdate('songbeamer_playlist', playlist.join("\n"));

    return;
}