'use strict';
let inputs = process.argv.slice(2);

// pick up their first character
let firstChars = inputs.map(item => {
  return item.substr(0, 1);
});
let result = firstChars.reduce((prev, curr) => {
  return prev += curr;
});
console.log(`[${inputs}] becomes "${result}"`);