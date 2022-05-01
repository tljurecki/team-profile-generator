const Employee = require('./Employee');
//brings in elements from Employee class to add to Intern object
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id , email);
        this.school = school;
    }
    //return the school name
    getSchool() {
        return this.school;
    }
    //return a role of Intern
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;