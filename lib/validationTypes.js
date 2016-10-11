/* All the validation types and the method name to validate */

var V = require('validator');

/* Add in Validator object the isString method */
V.isString = function(value){
  if(typeof value === 'string') return true; else return false;
};
/* Add in Validator object the isBoolean method */
V.isBoolean = function(value){
  if(typeof value === 'boolean') return true; else return false;
};

module.exports = {

  'alpha': {
    method: 'isAlpha'
  },
  'alphanumeric': {
    method: 'isAlphanumeric'
  },
  'ascii': {
    method: 'isAscii'
  },
  'base64': {
    method: 'isBase64'
  },
  'boolean': {
    method: 'isBoolean'
  },
  'creditcard': {
    method: 'isCreditCard'
  },
  'date': {
    method: 'isDate'
  },
  'email': {
    method: 'isEmail'
  },
  'float': {
    method: 'isFloat',
    sanitizer: V.toFloat
  },
  'hex': {
    method: 'isHexadecimal'
  },
  'hexcolor': {
    method: 'isHexColor'
  },
  'int': {
    method: 'isInt',
    sanitizer: V.toInt
  },
  'ip': {
    method: 'isIP'
  },
  'json': {
    method: 'isJSON'
  },
  'lowercase': {
    method: 'isLowercase'
  },
  'mongodbid' : {
    method: 'isMongoId'
  },
  'numeric': {
    method: 'isNumeric'
  },
  'string': {
    sanitizer: 'toString'
  },
  'toBoolean': {
    sanitizer: 'toBoolean'
  },
  'toDate': {
    method: 'isDate',
    sanitizer: V.toDate,
    type: 'date'
  },
  'toEmail': {
    method: 'isEmail',
    sanitizer: V.normalizeEmail,
    type: 'email'
  },
  'toLowercase': {
    method: 'isString',
    sanitizer: toLowerCase,
    type: 'string'
  },
  'toUppercase': {
    method: 'isString',
    sanitizer: toUpperCase,
    type: 'string'
  },
  'url': {
    method: 'isURL'
  },
  'uppercase': {
    method: 'isUppercase'
  }

};

/*
* toLowerCase - Function
* @params - value {String}
* Check if is posible to set the string .toLowerCase and if it is lowerCase
*/
function toLowerCase(value){
  return value.toLowerCase();
};

/*
* toLowerCase - Function
* @params - value {String}
* Check if is posible to set the string .toLowerCase and if it is lowerCase
*/
function toUpperCase(value){
  return value.toUpperCase();
};
