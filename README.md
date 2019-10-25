# CLI-Notes
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
  * The title has to be unique on each note.
  * If the *notes.json* file doesn't exist, the **add** command will create a new one, and store a note with the given properties.


## remove:
> node app.js remove --title "Title 1"

Removes a note from the *notes.json* file, with the given *title* property.
  * Note title is required.
  * If the *notes.json* file doesn't exist, the **remove** command will create an empty one.


## read:
> node app.js read --title "Title 1"

Displays a note from the *notes.json* file, with the given *title* property.
  * Note title is required.
  * If the *notes.json* file doesn't exist, the **read** command will create an empty one.


## list:
> node app.js list

Displays the title of each note currently stored in the *notes.json* file.
  * If the *notes.json* file doesn't exist, the **list** command will create an empty one.