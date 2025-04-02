#!/usr/bin/env node  
  
const fs = require('fs');  
const path = require('path');  
const { program } = require('commander');  
const chalk = require('chalk');  
  
// Define the version and description  
program  
  .version('1.0.0')  
  .description('Init Demo CLI Tool');  
  
// Define the -f, --file option  
program  
  .option('-f, --file <path>', 'Path to the input file')  
  .parse(process.argv);  
  
// Get the options  
const options = program.opts();  
  
if (!options.file) {  
  console.error(chalk.red('Error: No file path provided. Use -f <path> to specify the file.'));  
  process.exit(1);  
}  
  
// Resolve the file path  
const filePath = path.resolve(process.cwd(), options.file);  
  
// Check if the file exists  
if (!fs.existsSync(filePath)) {  
  console.error(chalk.red(`Error: File not found at path "${filePath}"`));  
  process.exit(1);  
}  
  
// Read the file content  
fs.readFile(filePath, 'utf8', (err, data) => {  
  if (err) {  
    console.error(chalk.red(`Error reading file: ${err.message}`));  
    process.exit(1);  
  }  
  
  // Process the file content  
  // For demonstration, we'll just log it  
  console.log(data);  
  
  // Here, you can add additional logic to "initialize the demo" with the file content  
  // For example, parsing JSON, setting up a project, etc.  
});  
