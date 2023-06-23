import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"

function _saveState() {
  saveState('notes', AppState.notes)
}

class NotesService {

  createNote(noteData) {
    // console.log('function in the service', noteData)
    const newNote = new Note(noteData)
    // console.log(newNote)
    AppState.notes = [...AppState.notes, newNote]
    _saveState()
    // console.log(AppState.notes)
  }

  setActiveNote(noteId) {
    // console.log('in the service', noteId)
    const selectedNote = AppState.notes.find(n => n.id == noteId)
    // console.log('selected note', selectedNote)
    AppState.activeNote = selectedNote
    // console.log('active case', AppState.activeNote)
  }

  saveMemo(newContent) {
    const currentNote = AppState.activeNote
    // console.log('new content in service', newContent)
    currentNote.memo = newContent
    console.log(currentNote.memo)
    const updatedTime = new Date
    // console.log(updatedTime)
    currentNote.dateCreated = updatedTime
    _saveState()
    AppState.emit("notes")

  }

  deleteNote(noteId) {
    const selectedNoteIndex = AppState.notes.findIndex(n => n.id == noteId)
    console.log(selectedNoteIndex)
    AppState.notes.splice(selectedNoteIndex, 1)
    _saveState()
    AppState.emit("notes")


  }

}




export const notesService = new NotesService()