const assert = require("node:assert").strict;

(() => {
    const ret = calc();
    assert.strictEqual(ret, 28);
    console.log("OK!");
})();