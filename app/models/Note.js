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
        
          <div class="col-12 selectable note-border elevation-4 text-center" style="border-color: ${this.color};" onclick="app.NotesController.setActiveNote('${this.id}')">${this.title}
          <div class="">
          <button onclick="app.NotesController.deleteNote('${this.id}')" class="btn btn-danger">Delete</button>
          </div>
          <div class="">Created:
          ${this.dateFormatted}
          </div>
          </div>


    `
  }

  get currentNoteTemplate() {
    return `
    <div class="col-12 fs-4 text-center elevation-4">${this.title} </div>
    <div class= "col-12 text-center" <span>Last Edited: </span> ${this.dateFormattedLong}</div>
    <section class="row">
    <div class="col-12">
    <textarea id="note-memo" onblur="app.NotesController.saveMemo()" class="note-border" style= "border-color: ${this.color};" >${this.memo}</textarea>
    <button class="btn btn-success" onclick="app.NotesController.saveMemo()">Save</button>
    </div>
    </section>
    `
  }

  get dateFormatted() {
    let date = this.dateCreated
    return `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
  }

  get dateFormattedLong() {
    return this.dateCreated.toDateString() + " " + this.dateCreated.toLocaleTimeString()
  }

}