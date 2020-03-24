import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent 
implements OnInit {
  constructor(private http: HttpClient) {}
  
  @Input() completeFlag: boolean = false;
  
  tasks;
  url = 'https://www.json-generator.com/api/json/get/bTELkzmgde?indent=2';

  ngOnInit() {
    

    this.http.get(this.url).subscribe((data) => {
      this.saveData(data);
    });
  }

  saveData(data) {
    this.tasks = data;
  }
}