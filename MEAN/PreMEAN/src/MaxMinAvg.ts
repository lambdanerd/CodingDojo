class MaxMinAvg {
  public avg: number;
  public max: number;
  public min: number;

  constructor(numArr: number[]) {
    this.avg = this.calcAvg(numArr);
    this.max = this.calcMax(numArr);
    this.min = this.calcMin(numArr);
  }

  private calcAvg(numArr) {
    const sum = numArr.reduce((acc, cur) => acc + cur, 0);
    const length = numArr.length;
    return sum / length;
  }

  private calcMax(numArr) {
    return Math.max(...numArr);
  }

  private calcMin(numArr) {
    return Math.min(...numArr);
  }

  get result() {
    return `The minimum is ${this.min}, the maximum is ${
      this.max
    }, and the average is ${this.avg}.`;
  }
}
