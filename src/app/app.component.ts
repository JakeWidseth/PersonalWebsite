import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jake Widseth';

  ngOnInit(): void {
    document.body.classList.add('bg-svg');
  }
}
