//dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');

//import all classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateProfile = require('./src/generateProfile');
const Dist_Dir = path.resolve(__dirname, 'dist');
const output = path.join(Dist_Dir, 'index.html');

const employeeArray = [];
//start building the profile by getting manager info
const addManager = () => {
    console.log(`
    Let's Build Your Team Profile!
    To begin the following questions will be for the manager.
    `)
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'name', 
        message: 'What is your name? (Required)',
        //found validate method in inquirer docs
        validate: managerName => {
            if(managerName) {
                return true;
            } else {
                console.log('You must enter a name to continue!');
                return false;
            }
        }
    }, 
    { 
        type: 'input',
        name: 'id',
        message: "What is your employee ID? (Required)",
        validate: managerId => {
            if(managerId) {
                return true;
            } else {
                console.log('You must enter your employee ID to continue!');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email? address? (Required)',
        validate: managerEmail => {
            if(managerEmail) {
                return true;
            } else {
                console.log('To continue please enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?  (Required)',
        validate: managerOfficeNumber => {
            if(managerOfficeNumber) {
                return true;
            } else {
                console.log('To continue please enter your office number.');
                return false;
            }
        }
    }
    ]).then(promptResponses => {
        console.log(promptResponses);
        const { name, id, email, officeNumber } = promptResponses;
        const manager = new Manager(name, id, email, officeNumber);

        employeeArray.push(manager);
        addMoreStaff();
    })
   
};
//prompt to either add addition staff or finish the profile
const addMoreStaff = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addStaff',
            message: 'Select an option below to continue building your profile:',
            choices: ['add an intern', 'add an engineer', 'finish your profile']
        }
    ]).then(optionSelected => {
        switch (optionSelected.addStaff) {
           //if selected add an intern send to addIntern function
            case 'add an intern':
                addIntern();
                break;
           //if selected add an engineer send to addEngineer function
            case 'add an engineer':
                addEngineer();
                break;
            //otherwise finsih the profile
            default: 
            finishPage();
        }
    });
};

//function to add an intern
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log('To continue please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id number? (Required)',
            validate: internId => {
                if(internId) {
                    return true;
                } else {
                    console.log('To continue please enter the employee id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address for the intern?  (Required)',
            validate: internEmail => {
                if(internEmail) {
                    return true;
                } else {
                    console.log('To continue please enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend? (Required)',
            validate: internSchool => {
                if(internSchool) {
                    return true;
                } else {
                    console.log('To continue please enter the shcool name.');
                    return false;
                }
            }
        }
    ]).then(promptResponses => {
        console.log(promptResponses);
        const { name, id, email, school } = promptResponses;
        const intern = new Intern(name, id, email, school);

        employeeArray.push(intern);
        addMoreStaff();
    })
};
//function to add an engineer
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                } else {
                    console.log('To continue please enter the name of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID number? (Required)',
            validate: engineerId => {
                if(engineerId) {
                    return true;
                } else {
                    console.log('To continue please enter the employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address? (Required)',
            validate: engineerEmail => {
                if(engineerEmail) {
                    return true;
                } else {
                    console.log('To contune please enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username? (Required)',
            validate: github => {
                if(github) {
                    return true;
                } else {
                    console.log('To continue please enter a GitHub username.');
                    return false;
                }
            }
        }
    ]).then(promptResponses => {
        console.log(promptResponses);
        const { name, id, email, github } = promptResponses;
        const engineer = new Engineer(name, id, email, github);

        employeeArray.push(engineer);
        addMoreStaff();
    })
};
//function to finish the profile and create and write the file
const finishPage = () => {
    console.log(`
    You finished your team's portfolio!  
    `)

    //create a directory if it doesn't exist
    if(!fs.existsSync(Dist_Dir)) {
        fs.mkdirSync(Dist_Dir);
    }
fs.writeFileSync(output, generateProfile(employeeArray), 'utf-8');
};
addManager();

