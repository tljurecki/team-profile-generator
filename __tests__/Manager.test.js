const { getMaxListeners } = require('process');
const Manager = require('../lib/Manager');

test('test to create Manager object', () => {
    const manager = new Manager('Debbie', 1234, 'debbie@gmail.com', 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('to get the office number', () => {
    const manager = new Manager('Debbie', 1234, 'debbie@gmail.com', 5);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('return a role of Manger', () => {
    const manager = new Manager('Debbie', 1234, 'debbie@gmail.com', 5);

    expect(manager.getRole()).toBe('Manager');
})