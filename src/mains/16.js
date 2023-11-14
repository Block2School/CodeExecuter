const assert = require("node:assert").strict;

(() => {
    let list = ["Hello", 25, "World!", "Block", 2, "School", false, "Yeah"];
    list = push(list, true);
    assert.strictEqual(list[8], true);
    list = push(list, "testing");
    assert.strictEqual(list[9], "testing");
    list = pop(list);
    assert.strictEqual(list.length, 9);
    assert.strictEqual(list[8], true);
    list = shift(list);
    assert.strictEqual(list.length, 8);
    assert.strictEqual(list[0], 25);
    const listLen = len(list);
    assert.strictEqual(listLen, 8);
    const ret = display(list, 3);
    assert.strictEqual(ret, "Block");
    console.log("OK!");
})();