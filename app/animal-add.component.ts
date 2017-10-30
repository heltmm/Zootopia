import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-add',
  template: `

    <div *ngIf="newAnimal === null">
      <button (click)="newAnimal = true">Add new Animal</button>
    </div>
    <div *ngIf="newAnimal">

    </div>
  `
})

export class AnimalAddComponent {

}
