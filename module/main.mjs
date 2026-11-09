import { greet } from './1.mjs';
console.log(greet('Bob')); // 输出：Hello, Bob!



// main.mjs


// 同时导入具名和默认导出
import sayHello, { name } from './user.mjs';
console.log(name);
sayHello();

// 导入所有具名导出，并将其作为对象的属性
import * as user from './user.mjs';
console.log(user.name);
user.default(); // 默认导出会作为 default 属性

import user2 from './user.js';
console.log(user2.name);
user2.sayHello();
