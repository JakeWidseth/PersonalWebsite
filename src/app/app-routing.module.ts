import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component'
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: 'Note', component: NoteComponent },
  {path: 'Home', component: HomeComponent },
  {path: 'About', component: AboutComponent },
  {path: 'Resume', component: ResumeComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
