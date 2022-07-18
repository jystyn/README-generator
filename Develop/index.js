// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        name: 'decription',
        message: 'Type a description of your project.'
    },
    {
        name: 'installation',
        message: 'Provide the steps for installation.'
    },
    {
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        name: 'contributing',
        message: 'Type in the contribution guidelines.'
    },
    {
        name: 'tests',
        message: 'Type in the test instructions.'
    },
    {
        input: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['Apache', 'Boost', 'MIT', 'Mozilla']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Commit logged!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data);
    })
}

// Function call to initialize app
init();
