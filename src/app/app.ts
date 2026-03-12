import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('penta');

  le() {
    console.log('lenyomva...')
  }

  fel(event: KeyboardEvent) {
    console.log('felengedve...')
    console.log(event.key);
    if(event.key === 'Enter') {
      console.log('Enter lenyomva');
    }
  }

  nyom() {
    console.log('nyomi...')
  }
}
