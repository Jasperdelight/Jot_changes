import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotesController } from "./controllers/NotesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: NotesController,
    view: /*html*/`
    <div class="container-fluid">
    <section class="row">
      <div class="col-2 bg-primary text-light">
      <section class="row">
      <p class="col-6 d-flex justify-content-end">Total Jots:</p> <span id = "total-notes" class="col-6"> 8</span> </section>
        <section id = "stored-notes" class="row"></section>
        <section class="row"></section>
        <section id="note-form" class="row">
        <label>Add Jot!</label>
          <form id="myForm" action="" onblur="app.NotesController.createNote()" onsubmit= "app.NotesController.createNote()">
          <input required name="color" type="color" name="" id="">
            <input required minlength="3" name="title" type="text">
          </form>
        </section>
      </div>
      <div class="col-10">
      <section  class="row" id="active-note">
      <p class="text-center fs-3">Please Select A Note 😉</p>
 
      </section>
      </div>
    </section>
  </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]