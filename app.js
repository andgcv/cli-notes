const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })

// Create remove command
yargs
    .command({
        command: 'remove',
        desc: 'Removes a note',
        builder: {
            title: {
                describe: 'Title of the note you want to remove',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    })

// Create read command
yargs
    .command({
        command: 'read',
        desc: 'Displays a note',
        handler() {
            console.log('Displaying the note...')
        }
    })

// Create list command
yargs
    .command({
        command: 'list',
        desc: 'Lists all the notes',
        handler() {
            console.log('Listing all the notes...')
        }
    })

// Parses the arguments with all the details provided
yargs.parse()
