/**
 * Convert
 * [
 *   { id: 'param1', value: 'value1' },
 *   { id: 'param2', value: 'value2' }
 * ]
 * into
 * { param1: 'value1', param2: 'value2' }
 * 
 * @param {array} givenParameter The parameters you get from ACTION call
 * @return {object}
 */
 module.exports = function(givenParameter) {
    
    var parameter = {};

    for(var i in givenParameter) {
      parameter[givenParameter[i].id] = givenParameter[i].value;
    }

    return parameter;
}