// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt({
    type: "input",
    name: "Title for ReadME",
    message: "please enter the title for README"
}).then((data)=>{
    console.log(data);
});