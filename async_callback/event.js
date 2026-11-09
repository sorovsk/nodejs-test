setImmediate(() => {
  console.log('Immediate1 callback');
});

setTimeout(() => {
  console.log('Timeout1 callback');
}, 0);

setTimeout(() => {
  console.log('Timeout2 callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise1 callback');
});

process.nextTick(() => {
  console.log('Next tick callback');
});

console.log('Main thread1 execution');
console.log('Main thread2 execution');

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 注册事件处理器
myEmitter.on('greet', () => {
  console.log('Hello, world!');
});

// 触发事件
myEmitter.emit('greet');

// 创建事件处理程序

const eventEmitter = new EventEmitter();
var connectHandler = function connected() {
   console.log('被调用了connect');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}
 
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('被调用了data_received事件');
});
 
// 触发 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序执行完毕。");
