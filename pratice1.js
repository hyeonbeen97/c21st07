"use strict";
var _a, _b, _c, _d, _e, _f;
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
// number 전용 Queue
const numberQueue = new Queue();
numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다
// ?. => optional chaining
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed()); // 0
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed()); // 1
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed()); // undefined
// string 전용 Queue
const stringQueue = new Queue();
stringQueue.push('Hello');
stringQueue.push('World');
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase()); // HELLO
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase()); // WORLD
console.log((_f = stringQueue.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase()); // undefined
// 커스텀 객체 전용 Queue
const myQueue = new Queue();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 20 });
console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
console.log(myQueue.pop()); // undefined
