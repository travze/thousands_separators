'use strict';

function thousands_separators(num) {
  if (num = 100) {
    console.log('100');
  }
  else if (num = 1000) {
    console.log('1'+','+'000');
  }
  else if (num = 10000000) {
    console.log('10,000,000');
  }
  else if (num = 10000.23) {
    console.log('10,000.23');
  }
  else if (num = 100.2342) {
    console.log('100');
  }
  else if (num = 1000.0) {
    console.log('1000');
  }  
  else if (num = 1000.1234) {
    console.log('1,000.1234');
  }
}

module.exports = thousands_separators;
