const archiver = require('archiver');
const path = require('path');
const config = require(__dirname + "/../../src/config");
var fs = require('fs');

var baseFolder = __dirname + "/../../base/";


function run(System) {
    // Windows
    var Filename = config.pluginId  + '-' + System;
    
    console.log('[' + System + '] Start creating Installer')
    
    const output = fs.createWriteStream(__dirname + '/../../Installers/' + Filename + '.tpp');

    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    archive.pipe(output);
    
    archive.directory(baseFolder + System + "/" + config.pluginId + "/", config.pluginId);

    archive.finalize();

    console.log('[' + System + '] Installer sucessfully created')
}

module.exports = {
    run: run
}