import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the project licence or your badge link"
    },
    {
        type: "input",
        name: "collaborators",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is the repository link to this project?"
    },
    {
        type: "input",
        name: "deployed",
        message: "What is the deployed link to this project?"
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide the relative path to an image of the project."
    },
];