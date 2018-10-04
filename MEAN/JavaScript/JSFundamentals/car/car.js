function Car() {
  this.dmg = 0;
  this.maxSpeed = 69;

  this.bump = function(targetCar) {
    if (targetCar != this) {
      targetCar.dmg += 10;
      this.dmg += 10;
    }
    return this;
  };

  this.sayThis = () => console.log(this);
  this.sayThisWorse = function() {
    console.log(this);
  };
}

module.exports = Car;
