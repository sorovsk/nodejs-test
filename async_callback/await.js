const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('../demos/1.txt', 'utf8');
    console.log('---------------文件内容-------------\n', data, '\n------内容读取完毕--------\n');
  } catch (err) {
    console.error('读取文件出错:', err);
  }
}

readFile();
console.log('读取文件请求已发送，继续执行其他代码...');