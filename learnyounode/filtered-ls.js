'use strict';

let fs = require('fs');
fs.readdir(process.argv[2], (err, list) => {
  list.forEach((item) => {
    if (item.indexOf(process.argv[3]) > 0) {
      console.log(item);
    }
  });
});
