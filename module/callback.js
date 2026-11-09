function fetchData(callback) {
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 500);
}

function callback(data) {
    console.log(`Received data: ${data}`);
}

fetchData(callback);