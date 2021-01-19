import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Note } from './Note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  data: any[];
  notes = this.firestore.collection('Notes').valueChanges().subscribe(object => this.data = object);
  
  note: Note = {
    name: "",
    message: ""
  };

  constructor(private firestore: AngularFirestore) {
    
  };
  
  AddNote() {
    if(this.note.name != "" && this.note.message != "") {
      this.firestore.collection("Notes").add(this.note);
    }
    
  }
  ngOnInit(): void {
  }

}
