const { basename } = require("path");

const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");
const TPClient = require("../helper/TPClient");
const playlistLoader = require("../helper/playlistLoader");
const slidesLoader = require("../helper/slidesLoader");

var lastValue = null;

OSCClient.subscribe('current-filename', '/presentation/filename', (package) => {

    if(lastValue !== package.args[0].value) {
        lastValue = package.args[0].value;

        logIt('DEBUG', 'Set current filename to ' + package.args[0].value);
        TPClient.stateUpdate('songbeamer_current_filepath', package.args[0].value);
    
        TPClient.stateUpdate('songbeamer_current_filename', basename(package.args[0].value));

        playlistLoader();
        slidesLoader();

    }

}, 5);
