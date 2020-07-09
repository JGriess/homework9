

var inquirer = require("inquirer");
var fs = require("fs");
var badge;
inquirer
  .prompt([
    {
      type: "input",
      message: "Title:",
      name: "title"
    },
    {
      type: "input",
      message: "Description:",
      name: "description"
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation"
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage"
    },
    {
        type: "input",
        message: "Credits:",
        name: "credits"
    },
    {
        type: "expand",
        message: "License:",
        name: "license",
        choices: [
          {
            key: 'a',
            name: 'License A',
            value: 'la'
          },
          {
            key: 'b',
            name: 'License B',
            value: 'lb'
          },
        ]
    },
    {
      type: "input",
      message: "Github Username:",
      name: "username"
    },
    {
      type: "input",
      message: "Email Address:",
      name: "email"
    },

  ])
  .then(function(response) {
    console.log(response.license);
      if(response.license == "la"){
        badge = "<img src='https://img.shields.io/badge/LA-LicenseA-red'>";
      }
      if(response.license == "lb"){
        badge = "<img src='https://img.shields.io/badge/LB-LicenseB-blue'>";
      }
      console.log(badge);
      var writeStream = fs.createWriteStream("ReadME.md");
      writeStream.write("\n# " + response.title + " " + badge )
      writeStream.write("\n## Description")
      writeStream.write("\n" + response.description);
      writeStream.write("\n## Table of Contents")
      writeStream.write("\n### Installation") 
      writeStream.write("\n" + response.installation);
      writeStream.write("\n### Usage")
      writeStream.write("\n" + response.usage);
      writeStream.write("\n### Credits")
      writeStream.write("\n" + response.credits);
      writeStream.write("\n### License")
      writeStream.write("\n" + response.license);
      writeStream.write("\n## Questions")
      writeStream.write("\n Github: https://github.com/" + response.username)
      writeStream.write("\n Please reach me at " + response.email + " if you have any questions.")
      writeStream.end();
      
  });
