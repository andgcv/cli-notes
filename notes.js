const fs = require('fs')
const chalk = require('chalk')

// Function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()
    // If the array.find() method finds a value and is equal to what we mentioned, this value will be returned and assigned to the duplicateNote variable
    // otherwise, the value of duplicateNote will be undefined.
    const duplicateNote = notes.find((note) => note.title === title)

    // If there are no duplicates, execute the code
    if (!duplicateNote) {
        // Push the content on an object
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('Creating a new note...')
        console.log(chalk.bgGreen.bold('New note added!'))
    } else {
        console.log(chalk.bgYellow.bold("There's already a note with the given title."))
    }
}

// Function to remove notes
const removeNote = (title) => {
    const notes = loadNotes()

    // Will create a new array with the notes to keep, aka the notes that pass the test, the other ones will not pass the test so they will not be added to the new array
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        console.log(`Removing note with title "${title}"...`)
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen.bold('Note removed!'))
    } else {
        console.log(chalk.bgRed.bold(`Note with title "${title}" not found!`))
    }
} 

// Function to list all the notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgMagenta.bold('Your notes:'))
    // console.log(loadNotes())
    notes.forEach((note) => {
        console.log(chalk.cyan(note.title))
    })
}

// Function to read the list
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    // If the .find() method found the desired note, log it, else log an error message
    if (note) {
        console.log(chalk.bgMagenta.bold('Here is your note:'))
        console.log(`${chalk.cyan.bold(note.title)}: ${note.body}`)
    } else {
        console.log(chalk.bgRed.bold(`Note with title "${title}" not found!`))
    }
}

// Takes in the notes ARRAY, stringifys it's objects inside and saves them to the JSON file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    // If the file exists, will convert the buffer to a string, parse through it and return a JS object, else return an empty array to be populated
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

// Export the functions to be used by other files
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}