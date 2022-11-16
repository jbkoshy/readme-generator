// FS variable here
const fs = require("fs");

// Inquirer variable here
const inquirer = require("inquirer");

// Markdown varable here
const generateMarkdown = require("./utils/generateMarkdown");

// License Function
function getLicense(value) {
    if (value === 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === 'GPL 3.0') {
        return "[![License: GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === 'BSD 3') {
        return "[![License: BSD 3](https://img.shields.io/badge/license-BSD%203-red.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (value === 'Apache 2.0') {
        return "[![License \: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-lightgrey.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
}

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Please write a quick summary about the project.',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Please provide instructions for the installation of your project.',
        name: 'installation'
    },
    {
        type: 'list',
        message: 'What license will this project be under?',
        name: 'license',
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'Apache 2.0', 'None']
    },
    {
        type: 'input',
        message: 'Please provide instructions for the usage of this project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can users contribute to this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide testing instructions for this project, if any.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter your github username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your new README has been generated!')
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./example/README.md", data);
    });
}

// Function call to initialize app
init();


