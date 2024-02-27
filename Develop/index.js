// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); //grabbing other .js file

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation steps?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to choose?',
      choices: ['Apache','Boost','BSD']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the steps for contribution?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email for further questions:',
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created output.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        let generatedMarkdown = generateMarkdown(answers);
        writeToFile('output.md', generatedMarkdown);

    });
}

// Function call to initialize app
init();
