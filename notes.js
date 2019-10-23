const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // Filter creates an array filled with all array elements that pass a test
    // So if there are any objects with the title equal to the one we're pasing, it will return true and fill the new array
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    // If there are no duplicates, execute the code
    if (duplicateNotes.length === 0) {
        // Push the content on an object
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log("There's already a note with the given title.")
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
    addNote: addNote
}