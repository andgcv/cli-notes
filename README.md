# CLI-NOTES
Simple command line application for adding, deleting and displaying notes, created with Node.js.


## Commands:
  * [add](#add)
  * [remove](#remove)
  * [read](#read)
  * [list](#list)


## add:
> node app.js add --title "Title 1" --body "Lorem ipsum dolor sit amet."

Adds a new note to the *notes.json* file, with the given *title* and *body* properties.
  * Note title and body are required.


## remove:
> node app.js remove --title "Title 1"

Removes a note from the *notes.json* file, with the given *title* property.
  * Note title is required.


## read:
> node app.js read --title "Title 1"

Displays a note from the *notes.json* file, with the given *title* property.
  * Note title is required.


## list:
> node app.js list

Displays the title of each note currently stored in the *notes.json* file.