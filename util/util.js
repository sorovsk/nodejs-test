const util = require('util');
const name = 'Alice';
const age = 25;
console.log(util.format('Name: %s, Age: %d', name, age));  // 输出: Name: Alice, Age: 25

const fs = require('fs');

// 将回调风格的 fs.readFile 转换为返回 Promise 的函数
const readFileAsync = util.promisify(fs.readFile);

(async () => {
  try {
    const data = await readFileAsync('../demos/1.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();


async function fn() {
  return '通过util.callbackify() 自动调用 callback auto call callbackFunction';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

function fn2() {
  return Promise.reject(null);
}
const callbackFunction2 = util.callbackify(fn);

callbackFunction2((err, ret) => {
  // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
  err && err.hasOwnProperty('reason') && err.reason === null;  // true
});

 
const oldFunction = util.deprecate(() => {
  console.log('This function is deprecated');
}, '手工标记过期；oldFunction is deprecated. Use newFunction instead.');

oldFunction();  // 调用时会显示警告

console.log('date 是否是 Date 类型:', util.types.isDate(new Date()));  // true
console.log('map 是否是 Map 类型:', util.types.isMap(new Map()));    // true


 function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log('base 对象的 name:', this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log('sub 对象:\n', objSub, '\n'); 

const obj = { a: 1, b: 2, c: { d: 3 , f: { g: 4}} };
console.log('obj 对象的 inspect 方法输出:\n', util.inspect(obj, { showHidden: false, depth: null, colors: true }), '\n');
