const assert = require("node:assert").strict;

(() => {
    const ret = variables();
    assert.strictEqual(ret[0], 5);
    assert.strictEqual(ret[1], "Block2School!");
    assert.strictEqual(ret[2], false);
    assert.strictEqual(ret[3], null);
    assert.strictEqual(ret[4], -53);
    assert.strictEqual(ret[5], "This JavaScript tutorial is nice!");
    console.log("OK!");
})();