import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../note.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  completeString: string;
  note: Note;

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router, private location: Location) {}

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    let noteId = this.route.snapshot.params['id'];
    this.note = this.noteService.getNoteById(noteId);

    if (this.note.completed) {
      this.completeString = "Completed!";
    }
    else {
      this.completeString = "Not Completed";
    }
  }

}