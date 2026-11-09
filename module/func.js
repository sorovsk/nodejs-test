function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// fn 可以是个 lambda 函数
function applyOperation(a, b, fn) {
    return fn(a, b);
}

const sum = applyOperation(5, 3, (x, y) => x + y);
const product = applyOperation(5, 3, (x, y) => x * y);

console.log(sum); // 8
console.log(product); // 15

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']

function say(word) {
  console.log(word);
}

function execute(fn, value) {
  fn(value);
}

execute(say, "Hello");

function execute2(fn, value) { fn(value) }

execute2((s) => (console.log(s)), 'lambda 传值')


var http = require("http");

function fn(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}

http.createServer(fn).listen(8888);