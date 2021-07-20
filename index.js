const inquirer = require('inquirer')
const fs = require('fs')

const questions = [{
    type: 'input',
    message: 'What is the title of the Readme?',
    name: "title",
},
{
    type: 'input',
    message: 'Please Write the description of your project.',
    name: 'description'
},
{
    type:'input',
    message: 'Please write the install instructions needed for this application. preferable step-by-step details.',
    name: 'install'

},
{
    type: 'input',
    message: 'Please add the usage examples for the application, format for including screenshots: ![title](filePath)',
    name: 'usage'
},
{
    type: 'list',
    message: 'Please select a license used for this project application',
    choices:['MIT', 'Unlicense', 'Mozilla', 'Apache', 'BSD-2','BSD-3', 'Boost', 'none'],
    name: 'license'
},
{
    type: 'input',
    message: 'Please specify the guidelines for implementing contributions to this project', 
    name: 'contributing'
},
{
    type: 'input',
    message: 'Please write any tests for this application',
    name: 'tests'
},
{
    type: 'input',
    message: 'what is your github Username?',
    name: 'gitHubUN'
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email'
}
];

inquirer
    .prompt(questions)
    .then((Response)=> {
        console.log(Response)
    })