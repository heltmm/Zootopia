import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
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
        <tr *ngFor="let animal of childAnimals">
          <td>{{animal.name}}</td>
          <td>{{animal.species}}</td>
          <td>{{animal.age}}</td>
          <td>{{animal.diet}}</td>
          <td>{{animal.location}}</td>
          <td>{{animal.caretakers}}</td>
          <td>{{animal.sex}}</td>
          <td>{{animal.likes}}</td>
          <td>{{animal.dislikes}}</td>
          <td>
            <button (click)='editAnimal(animal)'>Edit</button>
            <button (click)='deleteAnimal(animal)'>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  @Output() clickToEditSender = new EventEmitter();
  @Output() clickToDeleteSender = new EventEmitter();

  editAnimal(clickedAnimal: Animal){
    this.clickToEditSender.emit(clickedAnimal);
  }

  deleteAnimal(clickedAnimal: Animal){
    this.clickToDeleteSender.emit(clickedAnimal);
  }

}
