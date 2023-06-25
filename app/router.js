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
          <form class="col-12" id="myForm" action="" onsubmit= "app.NotesController.createNote()">
          <input class="col-12" required minlength="3" maxlength="15" name="title" type="text">
          <input class="color-form" required name="color" type="color" name="" id="">
          </form>
          <div class="col-12 d-flex justify-content-center">
          <button class="btn btn-success add-button d-flex align-items-center justify-content-center" type="submit" form="myForm" value="submit">Add</button>
          </div>
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