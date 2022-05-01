const Employee = require('../lib/Employee');

test('test to create employee object', () => {
    const employee = new Employee ('Debbie', 1234, 'debbie@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('test to get the employee name', () => {
    const employee = new Employee ('Debbie', 1234, 'debbie@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('test to get the employee id', () => {
    const employee = new Employee ('Debbie', 1234, 'debbie@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("test to get the employee's email", () => {
    const employee = new Employee ('Debbie', 1234, 'debbie@gmail.com');

    expect(employee.emailAdd()).toEqual(expect.any(String));
});

test('test to get the role of the employee', () => {
    const employee = new Employee ('Debbie', 1234, 'debbie@gmail.com');

    expect(employee.jobDescription()).toBe('Employee');
});