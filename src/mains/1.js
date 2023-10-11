const assert = require("node:assert").strict;

(() => {
    const test = hello();
    assert.strictEqual(test, "Hello World!");
    console.log("OK!");
})()