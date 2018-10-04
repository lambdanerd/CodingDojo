export default class Bike {
  private miles: number;
  constructor(private maxSpeed: number, private price: number) {
    this.maxSpeed = maxSpeed;
    this.miles = 0;
    this.price = price;
  }

  /**
   * info
   */
  public get info(): string {
    return `Max. Speed: ${this.maxSpeed}mph, Mileage: ${this.miles}, Price: $${
      this.price
    }`;
  }

  /**
   * reverse
   */
  public reverse(): Bike {
    this.miles -= 5;
    /* tslint:disable */
    console.log('Reversing...');
    /* tslint:enable */
    return this;
  }

  /**
   * ride
   */
  public ride() {
    this.miles += 10;
    /* tslint:disable */
    console.log('Riding...');
    /* tslint:enable */
    return this;
  }
}
