console.log(__dirname);   // 当前模块所在目录的绝对路径，例如：/home/user/project
console.log(__filename);  // 当前模块文件的绝对路径，例如：/home/user/project/app.js
console.log(process);     // 进程对象，可读取命令行参数（process.argv）、环境变量（process.env）等
console.log(Buffer);      // 用于处理二进制数据的构造函数，常用于文件读写和网络通信