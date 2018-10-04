const Car = require('./car.js');
// const Car = carClass.Car;
jest.mock('./car.js');

beforeEach(() => {
  Car.mockClear();
});
it('should increase the damageDone value when another car hits it', () => {
  const car1 = new Car();
  const car2 = new Car();

  car1preBumpDmg = car1.dmg;
  car2preBumpDmg = car2.dmg;

  expect(car1.bump(car2).dmg).toEqual(10);
});
