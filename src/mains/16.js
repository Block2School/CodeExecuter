const assert = require("node:assert").strict;

(() => {
    const ret = lists();
    assert.strictEqual(ret[0], 8);
    assert.strictEqual(ret[1], "World!");
    assert.strictEqual(ret[2], "Hello");
    assert.strictEqual(ret[3], 25);
    assert.strictEqual(ret[4], "25-*-World!-*-Block-*-2-*-School-*-false-*-Yeah");
    console.log("OK!");
})();