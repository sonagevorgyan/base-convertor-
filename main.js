const reader = require("readline-sync");
let util = require("./convertor.js");

console.log('Insert positive integer to convert its binary and hexadecimal forms.');

let posNum = reader.questionInt('Please insert your number to get the binary and hexadecimal: ');

util.convertToBinary(posNum);
util.convertToHexa(posNum);