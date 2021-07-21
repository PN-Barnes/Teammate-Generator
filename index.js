const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')

const questions = [
    {
        type: 'list',
        message: 'Please select your role.',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    },
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
];

inquirer
    .prompt(questions)
    .then((Response)=> {
        console.log(Response)
    })


    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
          err ? console.error(err) : console.log('Success!')
        );
    
    }