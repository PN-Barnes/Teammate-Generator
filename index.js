const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { filterManager } = require('./generateIndex')
const { filterEngineers } = require('./generateIndex')
const { filterIntern } =require('./generateIndex')


const teamMembers = [];

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: "name",
    },
    {
        type: 'input',
        message: 'What is your ID',
        name: 'id'
    },
    {
        type:'input',
        message: 'What is your email',
        name: 'email'
        
    },
    {
        type: 'list',
        message: 'Please select your role.',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    }
];

const officeNumber = [
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber'
    }
]

const schoolName = [
    {
        type: 'input',
        message: 'What school did you attend?',
        name: 'school'
    }
]

const gitHub = [
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'github'
    }
]
const addEmployee = [
    {
        type: 'confirm',
        message: 'would you like to add more team members?',
        name:'confirm',
        default: false
    }
]
async function runGenerator() {
    let mainQuestions = await inquirer.prompt(questions)
    
    let roleChoice = await decideRole(mainQuestions);
    
    let roleAnswers = await inquirer.prompt(roleChoice)
    console.log(roleAnswers)
    
    let EmployeeInfo = await {...mainQuestions, ...roleAnswers}
    console.log(EmployeeInfo)
    let createEmployee = await generateEmployee(EmployeeInfo)
    
    teamMembers.push(createEmployee)
    // console.log(teamMembers)
    
    let addMember = await inquirer.prompt(addEmployee);
    
    generateMore(addMember.confirm)
}


function decideRole(info) {
    let role = info.role
    switch(role) {
        case 'Manager':
            return officeNumber;
            
        case 'Engineer':
            return gitHub;
                
        case 'Intern':
            return schoolName;
    }
}

function generateEmployee(info) {
    let name = info.name;
    let id = info.id;
    let email = info.email;
    let role = info.role;
    
    switch(role) {
        case 'Manager':
        return new Manager(name, id, email, info.officeNumber);

        case 'Engineer':
        return new Engineer(name, id, email, info.github);

        case 'Intern':
        return new Intern(name, id, email, info.school);

        default: return 'Error';
    }
}
function generatePage(data) {
    console.log(filterManager(data))
    console.log(filterEngineers(data))
    console.log(filterIntern(data))
}
function generateMore(confirm){
    if (confirm) {
        return runGenerator()
    }  else {
        generatePage(teamMembers)
        console.log('You have created your team!')
    }
    
}
                        
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    
}
runGenerator(); 