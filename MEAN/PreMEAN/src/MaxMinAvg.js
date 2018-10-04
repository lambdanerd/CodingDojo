class MaxMinAvg {
  constructor(numArr) {
    this.avg = this.calcAvg(numArr);
    this.max = this.calcMax(numArr);
    this.min = this.calcMin(numArr);
  }
  calcAvg(numArr) {
    const sum = numArr.reduce((acc, cur) => acc + cur, 0);
    const length = numArr.length;
    return sum / length;
  }
  calcMax(numArr) {
    return Math.max(...numArr);
  }
  calcMin(numArr) {
    return Math.min(...numArr);
  }
  get result() {
    return `The minimum is ${this.min}, the maximum is ${
      this.max
    }, and the average is ${this.avg}.`;
  }
}

const dummyArr = [1, -2, 9, 4];
const dummyMaxMinAvg = new MaxMinAvg(dummyArr);

console.log(dummyArr.result);
