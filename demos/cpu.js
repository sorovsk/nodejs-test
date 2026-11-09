// 不好的例子：CPU 密集型任务会阻塞事件循环
// fibonacciSync 是纯计算任务，会一直占用 CPU，期间事件循环无法处理其他请求
function fibonacciSync(n) {
    if (n < 2) return n;
    return fibonacciSync(n - 1) + fibonacciSync(n - 2);
}

// 这会阻塞整个应用长达数秒，期间所有请求都无法响应
console.log(fibonacciSync(40));

// 解决方案：使用 Worker Threads 将 CPU 密集型任务放到独立线程中执行，
// 主线程的事件循环就不会被阻塞
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    // 主线程：创建一个 Worker，并将参数 { n: 40 } 传给它
    // Worker 会在独立线程中执行当前这个文件（__filename 指当前文件路径）
    const worker = new Worker(__filename, {
        workerData: { n: 40 }
    });
    
    // 监听 Worker 发来的消息（计算结果）
    worker.on('message', (result) => {
        console.log('结果:', result);  // Worker 计算完成后，主线程在这里接收结果
    });
} else {
    // Worker 线程：通过 workerData 获取主线程传入的参数，执行计算后发送结果
    const result = fibonacciSync(workerData.n);
    parentPort.postMessage(result);  // 将结果发送回主线程
}