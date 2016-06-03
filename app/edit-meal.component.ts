import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="container">
  <h3>Edit Meal:</h3>
  <div class = "meal-form">
  <input placeholder="Meal Name" [(ngModel)]="meal.mealName">
  <input placeholder="Details" [(ngModel)]="meal.mealDetails">
  <input placeholder="Calories" [(ngModel)]="meal.calorieCount">
  <h3>Select Meal Time</h3>
  <select class="mealTimeDropdown form-control" [(ngModel)]="meal.mealTime">
  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="Dinner">Dinner</option>
  <option value="Snack">Snack</option>
  <option value="Drink">Drink</option>
  </select>
  </div>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
