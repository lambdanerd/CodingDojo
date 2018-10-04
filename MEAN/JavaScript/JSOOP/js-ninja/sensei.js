import Ninja from './ninja';

const wisdom =
  'What one programmer can do in one month, two programmers can do in two months.';

export default class Sensei extends Ninja {
  constructor(name, health = 200) {
    super(name, health);
    this.speed = 10;
    this.strength = 10;
  }

  speakWisdom() {
    return wisdom;
  }
}
