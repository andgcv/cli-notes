const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

// Function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()

    // Filter creates a NEW array filled with all array elements that pass a test
    // So if there are any objects with the title equal to the one we're pasing, it will return true fill the new array with the element that passed the test
    const duplicateNotes = notes.filter((note) => note.title === title)

    // If there are no duplicates, execute the code
    if (duplicateNotes.length === 0) {
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

// Takes in the notes ARRAY, stringifys it's objects inside and saves them to the JSON file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    // if (fs.existsSync('notes.json') && fs.readFileSync('notes.json') != "") {
    //     const dataBuffer = fs.readFileSync('notes.json')
    //     const dataJSON = dataBuffer.toString()
    //     return JSON.parse(dataJSON)
    // } else if (fs.existsSync('notes.json') && fs.readFileSync('notes.json') == "") {
    //     return 'File is empty.'
    // } else {
    //     return "File doesn't exist"
    // }

    // Defensive code
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}