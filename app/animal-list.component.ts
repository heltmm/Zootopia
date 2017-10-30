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
    <div *ngIf="selectedAnimal">
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
          <td><input type="text" [(ngModel)]="selectedAnimal.name"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.species"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.age"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.diet"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.location"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.caretakers"></td>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
        </thead>
        <tbody>
          <td><input type="text" [(ngModel)]="selectedAnimal.sex"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.likes"></td>
          <td><input type="text" [(ngModel)]="selectedAnimal.dislikes"></td>
          <td>
            <button (click)="finishedEditing()">Finished Editing</button>
          </td>
        </tbody>
      </table>
    </div>
    <div *ngIf="newAnimal === null">
      <button (click)="newAnimal = true">Add new Animal</button>
    </div>
    <div *ngIf="newAnimal">

    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
}
