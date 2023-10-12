const assert = require("node:assert").strict;

(() => {
    let ret = divide(10, 5);
    assert.strictEqual(ret, 2);
    ret = divide(5, 2);
    assert.strictEqual(ret, 2.5);
    ret = divide(246, 60);
    assert.strictEqual(ret, 4.1);
    ret = divide(60, 20);
    assert.strictEqual(ret, 3);
    console.log("OK!");
})();