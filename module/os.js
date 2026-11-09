const os = require('os');
console.log('Operating System:', os.platform());
console.log('Total Memory:', os.totalmem());

const lodash = require('lodash');
const array = [1, 2, 3, 4];
const reversedArray = lodash.reverse(array.slice()); // 使用 lodash 反转数组
console.log('Reversed Array:', reversedArray);

// main.js 
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello();

// app.js
const math = require('./math.js');

console.log(math.add(2, 3)); // 5