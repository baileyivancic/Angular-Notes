import { Component, OnInit } from '@angular/core';
import { Note } from "../note.model";
import {formatDate} from '@angular/common';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
})
export class CreateNoteComponent implements OnInit {

  createdNote: Note = {
    description: '',
    title: '',
    completed: false,
    created: '',
    user: '',
    id: undefined
  }

  now = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  
  createNote() {
    let noteCopy = new Note();
    noteCopy = {...this.createdNote};
    this.noteService.createNote(noteCopy);
    alert(this.createdNote.title + " has been created!");
    this.clearNote();
  }

  clearNote() {
    this.createdNote = {
      description: '',
      title: '',
      completed: false,
      created: '',
      user: '',
      id: undefined
    };
  }

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.createdNote.created = this.now;
  }

}