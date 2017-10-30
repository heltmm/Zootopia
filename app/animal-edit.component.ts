import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
    <div *ngIf="childSeletedAnimal">
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
          <td><input type="text" [(ngModel)]="childSeletedAnimal.name"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.species"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.age"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.diet"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.location"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.caretakers"></td>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
        </thead>
        <tbody>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.sex"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.likes"></td>
          <td><input type="text" [(ngModel)]="childSeletedAnimal.dislikes"></td>
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

export class AnimalEditComponent {
  @Input() childSeletedAnimal: Animal;
  @Output() doneEditingSender = new EventEmitter();

  finishedEditing(){
    this.doneEditingSender.emit();
  }
}
