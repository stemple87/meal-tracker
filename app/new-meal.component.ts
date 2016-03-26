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
      <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
      <input placeholder="Total Calories" class="col-sm-8 input-lg" #newCalories>
      <button (click)="
        addMeal(newFoodItem, newDetails, newCalories)" class="btn-lg btn-info">Add
      </button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(foodItem: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement){
    var infoArray = [foodItem.value, details.value, parseInt(calories.value)];
    this.onSubmitNewMeal.emit(infoArray);
    foodItem.value = "";
    foodItem.value = "";
    foodItem.value = "";
  }
}
