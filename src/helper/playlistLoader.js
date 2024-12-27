const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");
const TPClient = require("../helper/TPClient");
const PromiseSender = require("./PromiseSender");

let currentPlaylist = [];
let currentPlaylistCount = 0;

module.exports = async function() {
    
    
    var countMessage = new OSCMessage('/playlist/count');
    const response = await PromiseSender(countMessage)

    var currentIndexMsg = new OSCMessage('/playlist/itemindex');
    const currentIndexResponse = await PromiseSender(currentIndexMsg)
    const currentIndex = currentIndexResponse.args[0].value;
    const maxCount = response.args[0].value;

    const playlist = []

    if(currentIndex > 0) {
        var newMessage = new OSCMessage('/playlist/items/' + (currentIndex - 1) + '/caption');
        prevEntry = await PromiseSender(newMessage)
        prevEntryString = prevEntry.args[0].value
    } else {
        prevEntryString = " - None - "
    }

    if(currentIndex < maxCount - 1) {
        var newMessage = new OSCMessage('/playlist/items/' + (currentIndex + 1) + '/caption');
        nextEntry = await PromiseSender(newMessage)        
        nextEntryString = nextEntry.args[0].value
    }else {
        nextEntryString = " - None - "
    }
    
    // for(let i = 1;  i++; i <= response.args[0].value) {
    //     console.log("fetch ")
    //     var newMessage = new OSCMessage('/playlist/items/' + i + '/caption');
    //     singleResponse = await PromiseSender(newMessage)
    //     console.log(singleResponse)
    //     playlist.push(singleResponse.args[0].value)
    // }    
    // console.log("ready")
    // console.log(playlist);
    
    TPClient.stateUpdate('songbeamer_playlist_prev', prevEntryString);
    TPClient.stateUpdate('songbeamer_playlist_next', nextEntryString);

    // TPClient.stateUpdate('songbeamer_playlist', playlist.join("\n"));

    return;
}