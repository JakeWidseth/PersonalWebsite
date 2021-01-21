import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component'

const routes: Routes = [
  {path: 'Note', component: NoteComponent },
  {path: 'Home', component: HomeComponent },
  {path: 'About', component: AboutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
