import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Cheeseburger", "yep", 400),
      new Meal("French Fries", "delicious", 300),
      new Meal("Ice Cream", "hell yeah", 400),
      new Meal("Sandwitch", "all ham", 300)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
