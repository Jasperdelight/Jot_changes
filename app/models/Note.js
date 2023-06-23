import { generateId } from "../utils/generateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.dateCreated = data.dateCreated ? new Date(data.dateCreated) : new Date()
    this.dateEdited = data.dateEdited
    this.memo = data.memo
  }


  get savedNotesTemplate() {
    return `
   
          <div class="col-4 selectable" onclick="app.NotesController.setActiveNote('${this.id}')">${this.title}</div>
          <div class="col-4"> ${this.color}
          <button onclick="app.NotesController.deleteNote('${this.id}')" class="btn btn-danger">Delete</button>
          </div>
          <div class="col-4">
          ${this.dateFormatted}
          </div>


    `
  }

  get currentNoteTemplate() {
    return `
    <div class="col-12 fs-4 text-center">${this.title} </div>
    <div class= "col-12 text-center" <span>Last Edited: </span> ${this.dateCreated}</div>
    <section class="row">
    <div class="col-12">
    <textarea id="note-memo">${this.memo}</textarea>
    <button class="btn btn-success" onclick="app.NotesController.saveMemo()">Save</button>
    </div>
    </section>
    `
  }

  get dateFormatted() {
    let date = this.dateCreated
    return `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
  }

}