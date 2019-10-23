const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Create add command
yargs
    .command({
        command: 'add',
        desc: 'Adds a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
        }
    })

// Create remove command
yargs
    .command({
        command: 'remove',
        desc: 'Removes a note',
        handler: () => {
            console.log('Removing the note...')
        }
    })

// Create read command
yargs
    .command({
        command: 'read',
        desc: 'Displays a note',
        handler: () => {
            console.log('Displaying the note...')
        }
    })

// Create list command
yargs
    .command({
        command: 'list',
        desc: 'Lists all the notes',
        handler: () => {
            console.log('Listing all the notes...')
        }
    })

// Parses the arguments with all the details provided
yargs.parse()
