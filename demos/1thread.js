// 未捕获的异常会导致整个 Node.js 进程崩溃
// 与多线程不同，单线程中一个未处理的错误会让整个服务停止
// setTimeout(() => {
//     throw new Error('未捕获的异常1');  // 这会导致整个应用崩溃，所有请求都无法响应
// }, 1000);

// 解决方案：注册全局异常处理器，在应用崩溃前记录日志并优雅地退出
process.on('uncaughtException', (err) => {
    console.error('未捕获的异常2:', err);
    // 此处应先记录错误日志，再退出，避免静默崩溃导致问题难以排查
    process.exit(1);  // 退出码 1 表示异常退出
});

process.on('unhandledRejection', (reason, promise) => {
    // 当 Promise 被 reject 但没有 .catch() 处理时触发
    console.error('未处理的 Promise 拒绝:', reason);
    process.exit(1);
});