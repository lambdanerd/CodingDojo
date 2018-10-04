export default class Ninja {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  nameStringifier() {
    return `My ninja name is ${this.name}!`;
  }

  sayName() {
    console.log(this.nameStringifier());
    return this;
  }

  get stats() {
    return `Name: ${this.name}, Health: ${this.health}, Speed: ${
      this.speed
    }, Strength: ${this.strength}`;
  }

  drinkSake() {
    return (this.health += 10);
  }

  punch(targetNinja) {
    if (targetNinja instanceof Ninja && targetNinja != this) {
      targetNinja.health -= 5;
    }
    return this;
  }

  kick(targetNinja) {
    if (targetNinja instanceof Ninja && targetNinja != this) {
      let totalDamage = 15 * this.strength;
      targetNinja.health -= totalDamage;
    }
    return this;
  }
}
