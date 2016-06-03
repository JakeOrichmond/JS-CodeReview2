import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="jumbotron">
      <h1>GrubHub</h1>
    </div>
    <div class="container">
      <div class="well">
      <meal-list [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
  `
})

export class AppComponent {
  public meals: Meal[];
  public meal: Meal;
  constructor(){
    this.meals = [
      new Meal("Greek Yogurt", "Vanilla Flavor", 150, "Breakfast"),
      new Meal("White Mocha", "16oz", 200, "Drink"),
      new Meal("String Cheese", "Ate two", 160, "Snack"),
      new Meal("Steak Burrito", "From Baja Fresh", 508, "Lunch"),
      new Meal("Chicken Caesar Salad", "with dressing", 390, "Lunch"),
      new Meal("Apple", "Fuji, medium", 82, "Snack"),
      new Meal("Chicken Carbonara", "ate half", 780, "Dinner"),
      new Meal("Breadsticks", "had 10", 1000, "Dinner"),
      new Meal("Beer", "1 pint Hef", 280, "Drink")
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  console.log(clickedMeal);
  }
}
