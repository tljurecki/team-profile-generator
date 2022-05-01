const Employee = require('./Employee');
//brings elements from Employee class to new Manager object
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //return the office numeber
    getOfficeNumber() {
        return this.officeNumber;
    }

    //return a role of Manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;