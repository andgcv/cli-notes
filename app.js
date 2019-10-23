const notes = require('./notes')
const chalk = require('chalk')
const argv = require('yargs').argv

const command = process.argv[2]

if (argv.ships > 3) {
    console.log(chalk.blue('Success'))
}

if (command.toLowerCase() === 'add') {
    console.log(chalk.green.bold('Adding note'))
} else if (command.toLowerCase() === 'remove') {
    console.log(chalk.yellow.bold('Removing note'))
}


