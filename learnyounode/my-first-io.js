'use strict';

let fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
let newlines = str.split('\n');

console.log(newlines.length - 1);

// another solution
let contents = fs.readFileSync(process.argv[2]);
let lines = contents.toString().split('\n').length - 1;
console.log(lines);