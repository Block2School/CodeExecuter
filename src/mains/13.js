const assert = require("node:assert").strict;

(() => {
    const ret = helloWorld();
    assert.strictEqual(ret, true);
    console.log("OK!");
})();