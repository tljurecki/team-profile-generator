//create employee object
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//get employee name
getName() {
    return this.name;
}

//get employee id
getId() {
    return this.id;
}

//get employee's email
emailAdd() {
    return this.email;
}

//get employee's role
jobDescription() {
    return 'Employee';
}

}
module.exports = Employee;