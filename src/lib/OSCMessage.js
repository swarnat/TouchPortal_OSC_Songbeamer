/**
 * The path, this message should go to
 * @param {string} path 
 */
module.exports = function(path) {
    var currentArguments = [];

    /**
     * Another string parameter to send with OSC message
     * @param {string} value 
     */
    this.addStringParameter = function(value) {
        currentArguments.push({
            type: 's',
            value: value
        });
    }

    /**
     * Another int parameter should send with OSC message
     * @param {int} value 
     */
    this.addIntegerParameter = function(value) {
        currentArguments.push({
            type: 'i',
            value: value
        });
    }
    
    /**
     * Another int parameter should send with OSC message
     * @param {int} value 
     */
    this.addByteParameter = function(value) {
        if(value < 0 || value > 255) {
            throw new RangeError("value of byte must between or equal 0 and 255")
        }
        
        currentArguments.push({
            type: 'i',
            value: value
        });
    }

    /**
     * Another float parameter should send with OSC message
     * @param {float} value 
     */
    this.addFloatParameter = function(value) {
        currentArguments.push({
            type: 'f',
            value: value
        });
    }

    /**
     * a timecode parameter should send with OSC message
     * @param {float} value 
     */
    this.addTimecodeParameter = function(value) {
        currentArguments.push({
            type: 'd',
            value: value
        });
    }

    /**
     * a timecode parameter should send with OSC message
     * @param {float} value 
     */
    this.addDoubleParameter = function(value) {
        currentArguments.push({
            type: 'd',
            value: value
        });
    }

    
    this.getPath = function() {
        return path;
    }

    this.getArguments = function() {
        return currentArguments;
    }
    
}