import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML, setText } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"

function _drawSavedNotes() {
  const savedNotes = AppState.notes
  let template = ''
  // console.log(savedNotes)
  savedNotes.forEach(n => template += n.savedNotesTemplate)
  setHTML('stored-notes', template)
  setText('total-notes', savedNotes.length)
}

function _drawActiveNote() {
  const activeNote = AppState.activeNote

  setHTML('active-note', activeNote.currentNoteTemplate)
}

export class NotesController {

  constructor() {
    // console.log('hi from controller')
    _drawSavedNotes()


    AppState.on("notes", _drawSavedNotes)


  }

  createNote() {
    event.preventDefault()
    const form = event.target
    let noteData = getFormData(form)
    // console.log(noteData)
    notesService.createNote(noteData)
    document.getElementById("myForm").reset()
  }

  setActiveNote(noteId) {
    // console.log('active', noteId)
    notesService.setActiveNote(noteId)
    _drawActiveNote()
  }
  async deleteNote(noteId) {
    const wantsToDelete = await Pop.confirm('Do you want to Delete this Note?')

    if (!wantsToDelete) {
      return
    }

    console.log(noteId)
    notesService.deleteNote(noteId)

  }

  saveMemo() {
    // console.log('button works')
    let newContent = document.getElementById('note-memo').value
    // console.log(newContent)
    notesService.saveMemo(newContent)
    _drawActiveNote()
  }


}
