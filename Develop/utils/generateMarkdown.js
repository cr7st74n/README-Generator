// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# **${data.title}**

## About
${data.Description}

### Table of Contents
 * [About](#About)

 * [Criteria](#Criteria)

 * [Installation](#Installation)

 * [Usage](#Usage)

 * [License](#License)

 * [Deployment](#Deployment)

 * [Tests](#Tests)

 * [Questions](#Questions)



## **Criteria**
${data.proyect_criterial}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Deployment
${data.Contributing}

## Tests
${data.Tests}

## Questions
${data.Questions} \n
https://github.com/${data.GitHub_User}\n
${data.Email}

## Project Link
${data.link}

## Project Deployment
[Access here!](${data.link})

`;
}

module.exports = generateMarkdown;
 