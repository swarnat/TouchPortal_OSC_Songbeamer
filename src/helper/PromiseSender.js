const OSCClient = require("./../lib/OSCClient");

module.exports = function (message) {
  return new Promise((resolve) => {
    OSCClient.send(message, (response) => {
      resolve(response);
    });
  });
};
