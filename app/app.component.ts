import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animals:</h1>
    <animal-list [childAnimals]="masterAnimals" (clickToEditSender)="editAnimal($event)"(clickToDeleteSender)="deleteAnimal($event)">loading</animal-list>
    <animal-edit [childSeletedAnimal]="selectedAnimal">...Loading...</animal-edit>
    <animal-add> asdfasdf</animal-add>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  newAnimal = null;

  masterAnimals: Animal[] = [
   new Animal('Red Panda', 'Patches', 2, 'Omnivore', 'Northern Trail', 3, 'Female', 'Quite and shady trees', 'Loud noises'),
   new Animal('Sloth', 'Sly', 4, 'Foliovore', 'Rain Forest', 4, 'Male', 'fresh buds and shoots', 'being disturbed'),
   new Animal('Western Lowland Gorilla', 'Harambe', 17, 'Herbivore', 'Great Apes', 5, 'Male', 'socialiazing with visotors', 'getting shot')
 ];

 editAnimal(clickedAnimal){
   this.selectedAnimal = clickedAnimal;
 }
 finishedEditing(){
   this.selectedAnimal = null;
 }
 deleteAnimal(clickedAnimal){
   this.masterAnimals.splice(this.masterAnimals.indexOf(clickedAnimal), 1);
 }
 createAnimal(){

 }
}
