import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonalWebsite';
  private data: any[];
  notes = this.firestore.collection('Notes').valueChanges().subscribe(object => this.data = object);
  
  
  constructor(private firestore: AngularFirestore) {
    
  };

  AddNote() {

  }


}
