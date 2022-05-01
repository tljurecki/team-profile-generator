const Engineer = require('../lib/Engineer');

test('test to create Engineer object', () => {
    const engineer = new Engineer('Debbie', 1234, 'debbie@gmail.com', 'debbihub');

     expect(engineer.github).toEqual(expect.any(String));
});

test('test to get github username', () => {
    const engineer = new Engineer('Debbie', 1234, 'debbie@gmail.com', 'debbiehub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('test to get role of engineer', () => {
    const engineer = new Engineer('Debbie', 1234, 'debbie@gmail.com', 'debbiehub');

    expect(engineer.getRole()).toBe('Engineer');
});