function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('第一步结果'), 500);
  });
}

function asyncOperation2(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${data}, 第二步结果`), 500);
  });
}

async function run() {
    try {
        const result = await asyncOperation1();
        const finalResult = await asyncOperation2(result);
        console.log(finalResult);
    } catch (error) {
        console.error('链式中出错:', error);
    }
}

run();
