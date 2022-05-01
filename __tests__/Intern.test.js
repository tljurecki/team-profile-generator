const Intern = require('../lib/Intern');

test('test to create Intern object', () => {
    const intern = new Intern('Debbie', 1234, 'debbie@gmail.com', 'School');

    expect(intern.school).toEqual(expect.any(String));
});

test('test to get school name', () => {
    const intern = new Intern('Debbie', 1234, 'debbie@gmail.com', 'School');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('test to return role of Intern', () => {
    const intern = new Intern('Debbie', 1234, 'debbie@gmail.com', 'School');

    expect(intern.getRole()).toBe('Intern');
});