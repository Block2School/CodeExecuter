const assert = require("node:assert").strict;

(() => {
    let myBool = true
    let myValOne = 36;
    let myValTwo = 85;
    assert.strictEqual(toggleBoolean(myBool), false);
    assert.strictEqual(greatestValue(myValOne, myValTwo), 85);
    assert.strictEqual(checkEqual(myValOne, myValTwo, myBool), true);
    myBool = toggleBoolean(myBool);
    assert.strictEqual(checkEqual(myValOne, myValTwo, myBool), false);
    myValOne = 87;
    assert.strictEqual(toggleBoolean(myBool), true);
    assert.strictEqual(greatestValue(myValOne, myValTwo), 87);
    assert.strictEqual(checkEqual(myValOne, myValTwo, myBool), false);
    myValTwo = 87;
    assert.strictEqual(greatestValue(myValOne, myValTwo), 87);
    assert.strictEqual(checkEqual(myValOne, myValTwo, myBool), true);
    myBool = toggleBoolean(myBool);
    assert.strictEqual(checkEqual(myValOne, myValTwo, myBool), true);
    console.log("OK!");
})();