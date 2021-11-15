const subtract = require('./index.js');

it("subtract 2 - 1 to equal 1", async () => {
    expect(subtract(2, 1)).toBe(1);
});