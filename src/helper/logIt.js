const config = require("./../config");

module.exports = function () {
    var curTime = new Date().toISOString();
    var message = [...arguments];
    var type = message.shift();
    console.log(curTime,":",config.pluginId,":"+type+":",message.join(" "));
  }