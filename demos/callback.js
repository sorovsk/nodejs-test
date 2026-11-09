const fs = require('fs');

// 回调地狱示例：多个异步操作需要顺序执行时，回调会不断嵌套，代码可读性极差
// fs.readFile('1.txt', (err, data1) => {
//     if (err) throw err;
//     console.log('读取文件1完成');
//     console.log(data1.toString());
//     fs.readFile('2.txt', (err, data2) => {   // 嵌套第一层
//         if (err) throw err;
//         console.log('读取文件2完成');
//         console.log(data2.toString());
//         fs.readFile('3.txt', (err, data3) => {   // 嵌套第二层
//             if (err) throw err;
//             console.log('读取文件3完成');
//             console.log(data3.toString());
//             // 实际项目中这种嵌套可能有十几层，严重影响代码维护性
//             console.log('所有文件读取完成');
//         });
//     });
// });

// 现代解决方案：使用 Promise + async/await，让异步代码写起来像同步代码一样直观
const fsPromises = require('fs').promises;

async function readFiles() {
    try {
        // await 会等待每个文件读取完成，但整个函数不会阻塞事件循环
        // 注意：这里是顺序读取，如需并发读取多个文件，可以使用 Promise.all()
        const data1 = await fsPromises.readFile('1.txt');
        console.log('读取文件1完成');
        console.log(data1.toString());
        const data2 = await fsPromises.readFile('2.txt');
        console.log('读取文件2完成');
        console.log(data2.toString());
        const data3 = await fsPromises.readFile('3.txt');
        console.log('读取文件3完成');
        console.log(data3.toString());
        console.log('所有文件读取完成');
    } catch (err) {
        // try/catch 可以统一处理所有异步错误，不需要在每个回调里单独判断
        console.error('读取文件失败:', err);
    }
}

readFiles();
