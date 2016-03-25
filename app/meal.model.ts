export class Meal {
  public healthy: boolean = false;
  constructor(public foodItem: string, public details: string, public calories: number) {}
  checkHealthy() {
    if (this.calories < 300) {
      this.healthy = true;
    }
  }
}
