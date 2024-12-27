

const { basename } = require("path");

const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");
const TPClient = require("../helper/TPClient");
const playlistLoader = require("../helper/playlistLoader");


// const newMessage = new OSCMessage('/info');

// OSCClient.subscribe('playlist-updated', '/playlist/changed', (package) => {

//     logIt('DEBUG', 'Playlist changed');
    
//     playlistLoader();
//     //TPClient.stateUpdate('songbeamer_playlist', "Hallo Welt\n*Neue* <u>Zeile</u>\nWeitere Neue Zeile");
    
    
// })
// OSCClient.send(newMessage)


