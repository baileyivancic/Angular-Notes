import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../note.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note: Note;
  completeString: string;


  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    let noteId = this.route.snapshot.params['id'];
    let noteRef = this.noteService.getNoteById(noteId);
    this.note = {...noteRef};

    if (this.note.completed) {
      this.completeString = "Complete";
    }
    else {
      this.completeString = "Incomplete";
    }
  }

  deleteNote() {
    this.noteService.deleteTask(this.note);
    alert("The task has been deleted");
    this.location.back();
  }

  updateNote() {
    this.noteService.updateTask(this.note);
    alert("Changes have been saved");
    this.location.back();
  }

  backClicked() {
    this.location.back();
  }

}