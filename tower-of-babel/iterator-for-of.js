'use strict';
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 0, result = 1;
    return {
      next() {
        num += 1;
        result = num;
        if (num % 3 === 0) result = 'Fizz';
        if (num % 5 === 0) result = 'Buzz';
        if (num % 3 === 0 && num % 5 === 0) result = 'FizzBuzz';
        if (num <= max) {
          return { done: false, value: result };
        } else {
          return { done: true, value: result };
        }

      }
    }
  }
};

// another solution
const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        let value = num;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        num++;
        return { done: false, value: value };
      }
    }
  }
};

for (var n of FizzBuzz) {
  console.log(n);
}