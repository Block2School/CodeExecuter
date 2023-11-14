const assert = require("node:assert").strict;

(() => {
   const myList = [
        "Hi",
        "B2S",
        "Block2School so good",
        "This tutorial is for loop"
    ];
    const ret = displayList(myList);
    assert.strictEqual(ret, 1);
    console.log("OK!");
})();