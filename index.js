const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
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
            message: "List your collaborators, if any, with links to their GitHub profiles.",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("Please enter a valid response");
                }
                return true;
            },
        },
        {
            type: "input",
            name: "screenshot",
            message: "Provide the relative path to an image of the project.",
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
    
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Credits
    
    ## License
    ${answers.license}
        
    ## Features`

}

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();