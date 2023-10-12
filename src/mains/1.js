const assert = require("node:assert").strict;

(() => {
    const test = helloWorld();
    assert.strictEqual(test, "Hello World !");
    console.log("OK!");
})()