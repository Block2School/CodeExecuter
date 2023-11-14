const assert = require("node:assert").strict;

(() => {
    const ret = json();
    assert.strictEqual(ret.number, 3);
    assert.strictEqual(ret.otherNumb, 9);
    assert.strictEqual(ret.a, 25);
    assert.strictEqual(ret.b[0], 5);
    assert.strictEqual(ret.b[1], 8);
    assert.strictEqual(ret.b[2], 10);
    assert.strictEqual(ret.b2s.block, "Block");
    assert.strictEqual(ret.b2s.to, "TWO");
    assert.strictEqual(ret.b2s.School, "SCHool");
    assert.strictEqual(ret.b2s.values.n, 120);
    assert.strictEqual(ret.b2s.values.a, 894);
    assert.strictEqual(ret.b2s.values.z, "Ok");
    assert.strictEqual(ret.b2s.boolean, false);
    assert.strictEqual(ret.texting, "Testing");
    assert.strictEqual(ret.entIre, "Block2School");
    console.log("OK!");
})();