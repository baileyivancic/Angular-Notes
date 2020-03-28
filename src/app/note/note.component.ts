import { Component, OnInit, Input } from '@angular/core';
import { Note } from "../note.model";
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;

  completeNote(noteId: number) {
    this.noteService.completeNote(noteId);
  }

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

}