var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('../demos/1.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output1.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");

 var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('output1.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('output1.txt.zip'));
  
console.log("文件压缩完成。");

 
const readableStream = fs.createReadStream('output1.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    readableStream.pause(); // 暂停读取
    setTimeout(() => {
        readableStream.resume(); // 恢复读取
    }, 2000);
});