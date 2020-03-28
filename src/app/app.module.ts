import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './note.service';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { HeaderComponent } from './header/header.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CompleteNotesComponent } from './complete-notes/complete-notes.component';
import { IncompleteNotesComponent } from './incomplete-notes/incomplete-notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
  RouterModule.forRoot([
         {
            path: 'create-note',
            component: CreateNoteComponent
         },
         {
           path: 'incomplete-notes',
           component: IncompleteNotesComponent
         },
         {
           path: "complete-notes",
           component: CompleteNotesComponent
         },
         {
           path: "view-note/:id",
           component: NoteDetailsComponent
         },
         {
           path: "edit-note/:id",
           component: EditNoteComponent
         },
         {
           path: '',
           component: HomeComponent
         }
      ]) 
    ],
  declarations: [ AppComponent, NoteListComponent, NoteComponent, NoteDetailsComponent, HeaderComponent, CreateNoteComponent, HomeComponent, CompleteNotesComponent, IncompleteNotesComponent, EditNoteComponent ],
  providers: [ NoteService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
