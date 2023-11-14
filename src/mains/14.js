const assert = require("node:assert").strict;

(() => {
    let ret = add(10, 12);
    assert.strictEqual(ret, 22);
    ret = add(2, 23);
    assert.strictEqual(ret, 25);
    ret = sub(10, 2);
    assert.strictEqual(ret, 8);
    ret = sub(26, 15);
    assert.strictEqual(ret, 11);
    ret = divide(6, 2);
    assert.strictEqual(ret, 3);
    ret = divide(20, 5);
    assert.strictEqual(ret, 4);
    ret = multiply(10, 3);
    assert.strictEqual(ret, 30);
    ret = multiply(3, 9);
    assert.strictEqual(ret, 27);
    console.log("OK!");
})();