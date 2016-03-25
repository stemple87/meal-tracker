import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:  `
    <hr />
    <div class="task-form">
      <h3>Add New Meal:</h3>
      <input placeholder="Food Item" class="col-sm-8 input-lg" #newFoodItem>
      <button (click)="
        addMeal(newFoodItem)" class="btn-lg btn-info">Add
      </button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(foodItem: HTMLInputElement){
    this.onSubmitNewMeal.emit(foodItem.value);
    foodItem.value = "";
  }
}
