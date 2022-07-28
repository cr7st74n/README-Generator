// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
//const 

// TODO: Create an array of questions for user input
const questions = [ "What is the tittle of the proyect?",
    "Description of the proyect?",
    "What is the proyect criterial?",
    "Insert proyect Link .!",
    "Installation", "Usage", "License"," Contributing", "Tests","Questions",
    "GitHub username ?", "email ?"
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt([
{
    type: "input",
    name: "title",
    message: questions[0]
},{
    type: "input",
    name: "Description",
    messege: questions[1]
},{
    type: "input",
    name: "proyect_criterial",
    messege: questions[2]
},{
    type: "input",
    name: "link",
    messege: questions[3]
},{
    type: "input",
    name: "Installation",
    messege: questions[4]
},{
    type: "input",
    name: "Usage",
    messege: questions[5]
},{
    type: "list",
    name: "License",
    messege: questions[6],
    choices: ["Academic Free License v3.0","Apache license 2.0","Artistic license 2.0"]
},{
    type: "input",
    name: "Contributing",
    messege: questions[7]
},{
    type: "input",
    name: "Tests",
    messege: questions[8]
},{
    type: "input",
    name: "Questions",
    messege: questions[9]
},{
    type: "input",
    name: "GitHub_User",
    messege: questions[10]
},{
    type: "input",
    name: "Email",
    messege: questions[11]
}]).then((data)=>{
    fs.appendFile(`${data.title}.md`, generateMarkdown(data),(err)=>
    err ? console.error(err): console.log('todo bien'))
});

