import { Component, OnInit, Input } from '@angular/core';
import { Note } from "../note.model";
import { NoteService } from '../note.service';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent 
implements OnInit {

  tasks: Note[];

  constructor(private noteService: NoteService) {
    this.tasks = this.noteService.getNotes();
  }
  
  @Input() completeFlag: boolean = false;

  ngOnInit() {
  } 

}