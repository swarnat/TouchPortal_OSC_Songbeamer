const { basename } = require("path");

const logIt = require("../helper/logIt");
const OSCMessage = require("../lib/OSCMessage");
const OSCClient = require("./../lib/OSCClient");
const TPClient = require("../helper/TPClient");

var lastValue = null;

OSCClient.subscribe('current-state', '/presentation/state', (package) => {
    if(lastValue !== package.args[0].value) {
        lastValue = package.args[0].value;

        var state = 'unknown-state';
        switch(package.args[0].value) {
            case 0:
                state = 'BLACK';
                break;
            case 1:
                state = 'BACKGROUND';
                break;
            case 2:
                state = 'PAGE';
                break;
            case 3:
                state = 'LOGO';
                break;
        }

        logIt('DEBUG', 'Set current state to ' + state);
        TPClient.stateUpdate('songbeamer_current_state', state);

    }
    
}, 5);
