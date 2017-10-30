import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "age",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge){
    let output: Animal[] = [];
    if(desiredAge === "matureAnimals"){
      for (let i = 0; i < input.length; i++){
        if (input[i].age >= 2){
          output.push(input[i]);
        }
      }
    }
    else if(desiredAge === "youngAnimals"){
      for (let i = 0; i < input.length; i++){
        if (input[i].age < 2){
          output.push(input[i]);
        }
      }
    }
    else{
      output = input;
    }
    return output;
  }
}
