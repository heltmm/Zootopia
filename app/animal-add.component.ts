import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-add',
  template: `

  <div *ngIf="!newAnimal">
    <button (click)="newAnimal = true">Add new Animal</button>
  </div>
  <div *ngIf="newAnimal">
    <h2>Add New Animal</h2>
    <label>Name</label>
    <input #newName>
    <label>Species</label>
    <input #newSpecies>
    <label>Age</label>
    <input #newAge>
    <label>Diet</label>
    <input #newDiet>
    <label>Location</label>
    <input #newLocation>
    <label>Caretakers</label>
    <input #newCaretakers>
    <label>Sex</label>
    <input #newSex>
    <label>Likes</label>
    <input #newLikes>
    <label>Dislikes</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)" (click)="newAnimal = false">Add!</button>
  </div>
  `
})

export class AnimalAddComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string){
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes)

    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
