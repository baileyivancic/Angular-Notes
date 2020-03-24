import { Component, OnInit } from '@angular/core';
import { Note } from "../note.model";
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  createdNote: Note = {
    id: undefined,
    completed: false,
    user: '',
    title: '',
    description: '',
    created: ''
  }

  now = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  

  constructor() { }

  ngOnInit() {
    this.createdNote.created = this.now;
  }

}