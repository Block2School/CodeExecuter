const assert = require("node:assert").strict;

(() => {
    const ret = json();
    assert.strictEqual(ret[0], 12);
    assert.strictEqual(ret[1], "Block TWO TestingOk");
    assert.strictEqual(ret[2], "falseBlock2School 919 200");
    assert.strictEqual(ret[3], "SCHoolTWOBlock Block2School120 12");
    console.log("OK!");
})();