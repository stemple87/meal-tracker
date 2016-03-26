import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <hr />
    <h2> Selected Meal: {{meal.foodItem}} | Details: {{meal.details}} | Calories: {{meal.calories}}</h2>
    <hr />
    <div class="meal-form">
      <h3>Edit Food Item: </h3>
      <input [(ngModel)]="meal.foodItem" class="col-sm-8 input-lg"/>
      <br>
      <h3>Edit Details: </h3>
      <input [(ngModel)]="meal.details" class="col-sm-8 input-lg"/>
      <br>
      <br>
      <h3>Edit Calories: </h3>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
