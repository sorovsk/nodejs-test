const express = require('express');
const app = express();
const port = 3000;

// 日志记录中间件
const logger = (req, res, next) => {
    console.log(`日志记录： Request Type: ${req.method} ${req.url}`);
    next();
};

// 使用中间件
app.use(logger);


// 定义一个 GET 路由
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// 定义一个 POST 路由
app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.get('/search/:query', (req, res) => {
    const query = req.params.query;
    res.send(`Search query: ${query}`);
});

callback = () => {
    console.log(`Server is running on http://localhost:${port}`);
}

// 启动服务器
app.listen(port, callback);