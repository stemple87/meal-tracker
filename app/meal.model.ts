export class Meal {
  public healthy: boolean = false;
  constructor(public foodItem: string, public details: string, public calories: string) {}
  checkHealthy() {
    var calories = parseInt(this.calories);
    if (isNaN(calories)) {
      calories = 0;
    }
    if (calories < 300) {
      this.healthy = true;
    }
  }
}
