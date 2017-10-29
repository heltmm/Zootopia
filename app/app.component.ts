import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animals:</h1>

    <table class="table">
    <thead>
      <th>Name</th>
      <th>Species</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
    </thead>
    <tbody>
      <tr *ngFor="let animal of animals">
        <td>{{animal.name}}</td>
        <td>{{animal.species}}</td>
        <td>{{animal.age}}</td>
        <td>{{animal.diet}}</td>
        <td>{{animal.location}}</td>
        <td>{{animal.caretakers}}</td>
        <td>{{animal.sex}}</td>
        <td>{{animal.likes}}</td>
        <td>{{animal.dislikes}}</td>
      </tr>
    </tbody>
    </table>
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
