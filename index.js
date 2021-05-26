const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your full name?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "username",
            message: "What is your Github username?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "repo",
            message: "What is the link to the repository for this project?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "deployed",
            message: "What is the deployed link to this project?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project.",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use.",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
          },
        {
            type: "input",
            name: "collaborators",
            message: "List your collaborators, if any.",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "tests",
            message: "Provide examples on how to run tests for your application.",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
    ]);
};

const generateREADME = (answers) => {
    `# ${answers.title}
    ###${answers.deployed}
    ###${answers.repo}
    ![${license}](https://img.shields.io/badge/license-${license}-brightgreen)
    
    ## Description
    ${answers.description}

    ## Table of Contents
    
    * [Installation](##Installation)
    * [Usage](##Usage)
    * [License](##License)
    * [Contributors](##Contributors)
    * [Tests](##Test)
    * [Questions](##Questions)

    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## License
     ${answers.license} Copyright (c) 2021 ${answers.name}
   
    ## Contributors
    ${answers.contributors}
        
    ## Tests
    ${answers.tests}
    
    ## Questions
    If you have questions about this application please email: ${answers.email}
    Or visit my Github profile: https://github.com/${answers.username}`

}

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();