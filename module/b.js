const a = require('./a');
console.log('b.js:', a.message);
module.exports = { message: 'Hello from b' };