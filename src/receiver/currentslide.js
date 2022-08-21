const logIt = require("../helper/logIt");
const OSCClient = require("./../lib/OSCClient");
const TPClient = require("../helper/TPClient");

var lastValue = null;

OSCClient.subscribe('current-slide', '/presentation/page', (package) => {
    if(lastValue !== package.args[0].value) {
        lastValue = package.args[0].value;

        logIt('DEBUG', 'Set current page to ' + package.args[0].value);
        TPClient.stateUpdate('songbeamer_current_page', package.args[0].value);
    }
}, 5);
