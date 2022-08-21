const config = require("./config");
const TPClient = require("./helper/TPClient");

// That way if TP shuts down the plugin will be shutdown too
TPClient.connect({ 
  pluginId: config.pluginId, 
  updateUrl: config.updateUrl 
});
