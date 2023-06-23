import { Note } from "./models/Note.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Value.js').Note[]} */
  notes = [
    new Note({
      title: 'test', color: '#000000', memo: 'hello',
    }),
    new Note({
      title: 'workin', color: '#000000', memo: 'cat jumped over the moon',
    }),
  ]

  activeNote = null



  // NOTE Used to load initial data
  init() {
    this.notes = loadState('notes', [Note])
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
