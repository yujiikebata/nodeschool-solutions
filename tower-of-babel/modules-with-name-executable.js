let arg1 = process.argv[2];
let arg2 = process.argv[3];

import {PI} from './modules-with-name-module';
import {sqrt} from './modules-with-name-module';
import {square} from './modules-with-name-module';

// from solution
// import {PI, sqrt, square} from './solution-math';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));