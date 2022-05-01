const Employee = require('./Employee');
//bring in elements from employee class to add to the Engineer object
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
   //return the github username
    getGithub() {
        return this.github;
    }
    //return a role of Engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;