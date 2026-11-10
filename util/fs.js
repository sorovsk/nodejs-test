fs = require('fs');

// 异步读取
callback = (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("6或者5、异步读取:\n 【" + data.toString() + "】");
}
fs.readFile('../demos/1.txt', callback);

callback = (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('5或者6、异步File written successfully');
}
// 塞callback就是异步
fs.writeFile('../demos/1.txt', 'Hello, World!', callback);


// 同步读取
var data = fs.readFileSync('../demos/1.txt');
console.log("1、同步读取: \n【" + data.toString() + "】");

console.log("2、程序执行完毕。");



try {
    fs.writeFileSync('../demos/1.txt', 'Hello, World!');
    console.log('3、同步File written successfully');
} catch (err) {
    console.error('Error writing file:', err);
}

try {
    fs.appendFileSync('../demos/1.txt', '\nAppending some text');
    console.log('4、追加文本Text appended successfully');
} catch (err) {
    console.error('Error appending to file:', err);
}


fs.access('example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('文件不存在 File does not exist');
    } else {
        console.log('File exists');
    }
});

// 读取文件流A写入文件B

const readableStream = fs.createReadStream('./天龙八部.txt', 'utf8');
const writableStream = fs.createWriteStream('./天龙八部copy.txt');

let buffer = '';

function writeSentence(sentence) {
  const out = sentence.slice(0, 10);
  if (!out) return;
  // 加个换行，方便看出每个句段的前10字，不需要可去掉
  const ok = writableStream.write(out + '\n');
  if (!ok) readableStream.pause();
}

readableStream.on('data', (chunk) => {
  buffer += chunk;
  const parts = buffer.split('。');
  buffer = parts.pop(); // 最后一段可能不完整，留到下次

  for (const sentence of parts) {
    writeSentence(sentence);
  }
});

readableStream.on('end', () => {
  // 文件末尾最后一句（没有以句号结尾的情况）
  if (buffer.length > 0) writeSentence(buffer);
  writableStream.end();
});

writableStream.on('drain', () => {
  readableStream.resume();
});

readableStream.on('error', (err) => writableStream.destroy(err));
writableStream.on('error', (err) => console.error('写入失败:', err));
writableStream.on('finish', () => console.log('写入完成'));


callback = (err, stats) => {
    if (err) {
        console.error('Error getting stats:', err);
        return;
    }
    console.log('文档信息： Stats:', stats);
    console.log('Is file?', stats.isFile());
    console.log('Is directory?', stats.isDirectory());
    console.log('Size:', stats.size);
}
fs.stat('./天龙八部copy.txt', callback);

callback = function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
}
fs.open('./test.txt', 'w', callback);

 
 var buf = new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");

callback2 = function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   }

callback = function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, callback2);
}

fs.open('./天龙八部copy.txt', 'r+', callback);


 
const fd = fs.openSync('./天龙八部copy.txt', 'r+');
try {
  const buf = Buffer.alloc(256);
  const bytes = fs.readSync(fd, buf, 0, buf.length, 0);
  if (bytes > 0) console.log('同步读取文件： ----------------------\n', buf.subarray(0, bytes).toString(), '\n-----------------------------------------');
} finally {
  fs.closeSync(fd);
}

// 这是异步？
fs.createReadStream('./天龙八部.txt', 'utf8')
  .on('data', (chunk) => process.stdout.write(chunk.slice(0, 10)))
  .on('end', () => console.log('\n读取完成'))
  .on('error', (err) => console.error('读取失败:', err));

  var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
fs.open('./天龙八部copy.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("截取10字节内的文件内容，超出部分将被去除。");
   
   // 截取文件
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("文件截取成功。");
      console.log("读取相同的文件"); 
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }

         // 仅输出读取的字节
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         // 关闭文件
         fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("文件关闭成功！");
         });
      });
   });
});


console.log("准备删除文件！");
fs.unlink('test.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("文件删除成功！");
});

console.log("创建目录 ./tmp/test");
callback = function(err, dir){
   if (err) {
       return console.error(err);
   }
   console.log(dir, "创建成功。");
}
fs.mkdir("./tmp/test",callback);

fs.mkdir('./tmp/test2/test3', { recursive: true }, callback);


fs.readdir("./",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log("====================================")
       console.log( file );
       console.log("====================================")
       
   });
});