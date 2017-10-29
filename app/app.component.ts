import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animals:</h1>
    <ul>
      <li *ngFor="let animal of animals">{{animal.species}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
   new Animal('Red Panda', 'Patches', 2, 'Omnivore', 'Northern Trail', 3, 'Female', 'Quite and shady trees', 'Loud noises'),
   new Animal('Sloth', 'Sly', 4, 'Foliovore', 'Rain Forest', 4, 'Male', 'fresh buds and shoots', 'being disturbed'),
   new Animal('Western Lowland Gorilla', 'Harambe', 17, 'Herbivore', 'Great Apes', 5, 'Male', 'socialiazing with visotors', 'getting shot')
 ];
}
