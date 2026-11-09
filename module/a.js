const b = require('./b');
console.log('a.js:', b.message);
module.exports = { message: 'Hello from a' };