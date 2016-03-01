'use strict';
module.exports = function average(...args) {
  let result = 0;
  args.forEach((value) => {
    result += value;
  });
  return result / args.length;
};