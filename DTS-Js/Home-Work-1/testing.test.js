const { expect } = require('@jest/globals');
const temperature = require('./script.js');
const temp = new temperature();

test("Constructor Celsius Zero", () => {
    expect(temp('celcius', 'celcius')).toBe(0);
});