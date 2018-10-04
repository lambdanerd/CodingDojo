import Bike from '../lib/Bike';

it('should return a string with the proper info', () => {
  let bike = new Bike(35, 350);
  expect(bike.info).toBe('Max. Speed: 35mph, Mileage: 0, Price: $350');
});
it('should ride properly', () => {
  let bike = new Bike(35, 350);
  bike.ride().ride();
  expect(bike.info).toBe('Max. Speed: 35mph, Mileage: 20, Price: $350');
});
it('should reverse properly', () => {
  let bike = new Bike(35, 350);
  bike
    .ride()
    .ride()
    .reverse();
  expect(bike.info).toBe('Max. Speed: 35mph, Mileage: 15, Price: $350');
});
