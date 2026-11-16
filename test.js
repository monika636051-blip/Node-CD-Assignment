
const assert = require('assert');
const greet = require('./index');

const result = greet();

assert.strictEqual(
    result,
    "Hello! Node.js Continuous Delivery"
);

console.log("All tests passed successfully!");