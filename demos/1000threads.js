// Node.js 高并发示例
const http = require('http');

const server = http.createServer((req, res) => {
    // 模拟异步操作（如查询数据库），100ms 后返回响应
    // 在这 100ms 内，事件循环可以继续处理其他请求，不会被阻塞
    setTimeout(() => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Node.js\n');
    }, 100);
});

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000/');
});

// 得益于非阻塞 I/O 和事件循环机制，这个服务器可以同时处理数千个请求而不会阻塞