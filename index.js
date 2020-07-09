

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
        badge = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80' height='20'><linearGradient id='s' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='r'><rect width='80' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#r)'><rect width='63' height='20' fill='#555'/><rect x='63' width='17' height='20' fill='#e05d44'/><rect width='80' height='20' fill='url(#s)'/></g><g fill='#fff' text-anchor='middle' font-family='Verdana,Geneva,DejaVu Sans,sans-serif' text-rendering='geometricPrecision' font-size='110'><text x='325' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='530'>License A</text><text x='325' y='140' transform='scale(.1)' textLength='530'>License A</text><text x='705' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='70'>A</text><text x='705' y='140' transform='scale(.1)' textLength='70'>A</text></g></svg>";
      }
      if(response.license == "lb"){
        badge = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='80' height='20'><linearGradient id='s' x2='0' y2='100%'><stop offset='0' stop-color='#bbb' stop-opacity='.1'/><stop offset='1' stop-opacity='.1'/></linearGradient><clipPath id='r'><rect width='80' height='20' rx='3' fill='#fff'/></clipPath><g clip-path='url(#r)'><rect width='63' height='20' fill='#555'/><rect x='63' width='17' height='20' fill='#007ec6'/><rect width='80' height='20' fill='url(#s)'/></g><g fill='#fff' text-anchor='middle' font-family='Verdana,Geneva,DejaVu Sans,sans-serif' text-rendering='geometricPrecision' font-size='110'><text x='325' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='530'>License B</text><text x='325' y='140' transform='scale(.1)' textLength='530'>License B</text><text x='705' y='150' fill='#010101' fill-opacity='.3' transform='scale(.1)' textLength='70'>B</text><text x='705' y='140' transform='scale(.1)' textLength='70'>B</text></g></svg>";
      }
      console.log(badge);
      var writeStream = fs.createWriteStream("ReadME.md");
      writeStream.write("\n# " + response.title + " " + badge )
      writeStream.write("\n## description")
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
      writeStream.write("\n Please reach me at " + response.email + "if you have any questions.")
      writeStream.end();
      
  });
