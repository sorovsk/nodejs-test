var server = require("./server");
var router = require("./router");
 
server.start(router.route);

// 输出全局变量 __filename 的值
console.log( __filename );