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
      <div class="col-4 bg-primary text-light">
      <section class="row">
      <p class="col-6">Total Notes</p> <span id = "total-notes" class="col-6"> 8</span> </section>
        <section id = "stored-notes" class="row"></section>
        <section class="row"></section>
        <section id="note-form" class="row">
          <form id="myForm" action="" onsubmit= "app.NotesController.createNote()">
            <input required minlength="3" name="title" type="text">
            <input required name="color" type="color" name="" id="">
            <input name="submit" type="button" value="Submit" name="" title="submit" onclick="app.NotesController.createNote()">
          </form>
        </section>
      </div>
      <div class="col-8">
      <section class="row" id="active-note">
 
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