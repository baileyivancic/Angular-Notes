import { Injectable } from '@angular/core';
import { Note } from "./note.model";
 
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [
  {
    "description": "Lorem eiusmod ipsum enim ipsum cupidatat minim cillum aute fugiat", 
    "title": "Brush my teeth", 
    "completed": true, 
    "created": "2017-10-18", 
    "user": "Amanda Everett", 
    "id": 0
  }, 
  {
    "description": "anim deserunt laboris ullamco occaecat quis minim eiusmod ipsum sint", 
    "title": "Do the dishes", 
    "completed": true, 
    "created": "2020-01-22", 
    "user": "Rosella Joyner", 
    "id": 1
  }, 
  {
    "description": "et excepteur cillum excepteur officia cillum sint culpa culpa ipsum", 
    "title": "Do my homework", 
    "completed": true, 
    "created": "2017-12-29", 
    "user": "Angel Bean", 
    "id": 2
  }, 
  {
    "description": "incididunt non quis Lorem duis fugiat eiusmod dolor tempor deserunt", 
    "title": "Take the rubbish out", 
    "completed": false, 
    "created": "2017-02-21", 
    "user": "Rodriguez Knowles", 
    "id": 3
  }, 
  {
    "description": "magna eiusmod eiusmod adipisicing consequat minim consectetur aliqua nulla deserunt", 
    "title": "Clean my room", 
    "completed": true, 
    "created": "2014-05-13", 
    "user": "Gross Contreras", 
    "id": 4
  }, 
  {
    "description": "aute velit est ea mollit consequat amet tempor irure consequat", 
    "title": "Fill car with petrol", 
    "completed": false, 
    "created": "2018-05-15", 
    "user": "Pate Pollard", 
    "id": 5
  }, 
  {
    "description": "qui nostrud excepteur quis reprehenderit aute et cupidatat eiusmod voluptate", 
    "title": "Clean my room", 
    "completed": true, 
    "created": "2019-11-21", 
    "user": "Ellison Richardson", 
    "id": 6
  }, 
  {
    "description": "occaecat nisi proident esse nulla eu nisi nisi aliqua minim", 
    "title": "Do my homework", 
    "completed": false, 
    "created": "2018-06-21", 
    "user": "Lois Jenkins", 
    "id": 7
  }, 
  {
    "description": "sunt duis adipisicing est velit proident consectetur voluptate reprehenderit nisi", 
    "title": "Take the rubbish out", 
    "completed": false, 
    "created": "2018-02-27", 
    "user": "Lizzie Conrad", 
    "id": 8
  }, 
  {
    "description": "sint cupidatat magna irure labore fugiat occaecat non aliqua voluptate", 
    "title": "Do chores", 
    "completed": false, 
    "created": "2017-10-02", 
    "user": "Kathleen Frye", 
    "id": 9
  }, 
  {
    "description": "excepteur eiusmod occaecat cupidatat nisi sint occaecat minim culpa culpa", 
    "title": "Mark assignment", 
    "completed": true, 
    "created": "2020-01-31", 
    "user": "Walsh Cole", 
    "id": 10
  }, 
  {
    "description": "deserunt est eu irure est nisi Lorem eiusmod fugiat ullamco", 
    "title": "Clean my room", 
    "completed": true, 
    "created": "2014-06-26", 
    "user": "Erickson Forbes", 
    "id": 11
  }, 
  {
    "description": "non non nisi adipisicing anim aute pariatur sit aliquip id", 
    "title": "Make breakfast", 
    "completed": false, 
    "created": "2016-09-29", 
    "user": "Lowery Castro", 
    "id": 12
  }, 
  {
    "description": "minim irure ullamco sint quis veniam adipisicing velit sit eu", 
    "title": "Do chores", 
    "completed": false, 
    "created": "2019-02-14", 
    "user": "Laurie Foley", 
    "id": 13
  }, 
  {
    "description": "proident tempor consequat exercitation ex adipisicing sit ex consectetur aute", 
    "title": "Get house ready", 
    "completed": true, 
    "created": "2016-10-02", 
    "user": "Deana Harris", 
    "id": 14
  }, 
  {
    "description": "ut elit cupidatat consequat amet esse id elit cupidatat qui", 
    "title": "Get house ready", 
    "completed": true, 
    "created": "2019-07-29", 
    "user": "Castro Powell", 
    "id": 15
  }, 
  {
    "description": "do sint duis mollit irure dolore cupidatat do non qui", 
    "title": "Finish program", 
    "completed": false, 
    "created": "2017-01-07", 
    "user": "Roberson Becker", 
    "id": 16
  }, 
  {
    "description": "minim anim elit velit ex esse tempor sit qui laborum", 
    "title": "Water plants", 
    "completed": false, 
    "created": "2016-11-30", 
    "user": "Mccullough Curtis", 
    "id": 17
  }, 
  {
    "description": "consequat ipsum voluptate proident ea dolore mollit voluptate ipsum laboris", 
    "title": "Wash car", 
    "completed": false, 
    "created": "2015-03-08", 
    "user": "Kellie Shaffer", 
    "id": 18
  }, 
  {
    "description": "amet reprehenderit mollit ad ad adipisicing ullamco quis non enim", 
    "title": "Take the rubbish out", 
    "completed": true, 
    "created": "2018-08-17", 
    "user": "Oconnor Davis", 
    "id": 19
  }, 
  {
    "description": "excepteur aliqua sit veniam reprehenderit veniam ea sit elit id", 
    "title": "Water garden", 
    "completed": false, 
    "created": "2019-08-21", 
    "user": "Autumn Wiggins", 
    "id": 20
  }, 
  {
    "description": "pariatur non sit et culpa adipisicing labore sunt quis velit", 
    "title": "Wash car", 
    "completed": false, 
    "created": "2016-03-24", 
    "user": "Mcleod Stuart", 
    "id": 21
  }, 
  {
    "description": "dolore consequat ullamco magna adipisicing ex labore eiusmod ut ut", 
    "title": "Finish program", 
    "completed": true, 
    "created": "2015-10-07", 
    "user": "Perez Mcclure", 
    "id": 22
  }, 
  {
    "description": "anim et commodo consectetur adipisicing ipsum exercitation culpa in anim", 
    "title": "Finish program", 
    "completed": false, 
    "created": "2018-08-01", 
    "user": "Jacobson Alston", 
    "id": 23
  }, 
  {
    "description": "dolor sit esse veniam ad sint non ipsum non et", 
    "title": "Wash car", 
    "completed": false, 
    "created": "2014-08-23", 
    "user": "Marina Hendricks", 
    "id": 24
  }
];

  // Returns list of all notes
  getNotes() {
    return this.notes;
  }

  completeNote(noteId) {
    let note = this.getNoteById(noteId);
    note.completed = true;
  }

  // Adds new note to list
  createNote(newNote: Note) {
    newNote.id = this.findNextId();
    this.notes.push(newNote);
  }

  findNextId() {
    let nextId: number = 0;
    for(let note of this.notes) {
      if (note.id > nextId) nextId = note.id;
    }
    return nextId+1;
  }

  getNoteById(noteId) {
    for (let note of this.notes) {
      if (note.id == noteId) {
        return note;
      }
    }
  }

  deleteTask(note: Note) {
    const index = this.getIndexOf(note);
    if (index > -1) {
        this.notes.splice(index, 1);
        console.log("Success");
    }
    else {
      console.log("Did not find it");
    }
  }

  getIndexOf(note: Note) {
    let index = 0;
    for(let noteTemp of this.notes) {
      if (noteTemp.id == note.id) {
        return index;
      }
      index+=1;
    }
    return -1;
  }

  updateTask(note: Note){
    let index: number = this.getIndexOf(note);
    this.notes[index] = note;
    console.log("Record updated!");
  }

  constructor() { }
 
}