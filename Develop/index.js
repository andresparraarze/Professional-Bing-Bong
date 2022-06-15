// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generate = require('./utils/generateMarkdown');

inquirer

.prompt([
    {
        type:'input',
        message:'Whats the name of the file?',
        name:'title',
    },
    {
        type:'input',
        message:'Give a short description',
        name:'description',
    },
    {
        type:'input',
        message:'How do you Install the project?',
        name:'installation',
    },
    {
        type:'input',
        message:'How do you use the project?',
        name:'usage',
    },
    {
        type:'input',
        message:'What type of license does it have?',
        name:'license',
    },
    {
        type:'input',
        message:'Steps if someone wants to contribute',
        name:'contributing',
    },
    {
        type:'input',
        message:'Does it have test? and if so, then how do you run them?',
        name:'tests',
    },
    {
        type:'input',
        message:'Github username',
        name:'github',
    },
    {
        type:'input',
        message:'Email and instructions on how to reach you',
        name:'email',
    },
])
.then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
});

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
