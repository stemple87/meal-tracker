import { Component } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: [mealList]
  template: `
    <h3 *ngFor"#currentMeal of mealList" (click)="mealClicked(currentMeal)">
      {{ currentMeal.description }}
    </h3>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}



@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">
        {{meal.foodItem}}
      </h3>
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
    console.log(clickedMeal);
  }
}


export class Meal {
  public healthy: boolean = false;
  constructor(public foodItem: string, public details: string, public calories: number) {}
  checkHealthy() {
    if (this.calories < 300) {
      this.healthy = true;
    }
  }
}
