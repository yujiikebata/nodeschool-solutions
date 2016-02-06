'use strict';
let inputs = process.argv.slice(2);

// pick up their first character
let firstChars = inputs.map(item => item.substr(0, 1));
// concatenate firstChars
let result = firstChars.reduce((prev, curr) => prev += curr);
console.log(`[${inputs}] becomes "${result}"`);

//------ official solution --------
var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0]).reduce((sofar, s) => sofar + s);
console.log(`[${inputs} becomes "${result}"`]);