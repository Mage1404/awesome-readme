//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./page-template');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter your project installation instructions (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter your project installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter your project usage information (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter your project usage information!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which license do you choose for this project? (Check all that apply)',
    choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'BSD 3-Clause', 'ISC']
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter your project contribution guidelines (Required)',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please enter your project contribution guidelines!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter your project test instructions (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter your project test instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
const test = pd => {
  return inquirer
    .prompt(questions)
};

// TODO: Create a function to initialize app

test()
.then(pd => {
  const page = generatePage(pd);
  fs.writeFile('./README(generated).md', page, err => {
    if (err) throw new Error(err);
  });
});

// Function call to initialize app

