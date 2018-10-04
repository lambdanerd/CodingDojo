const empp = require('./challenge2');
const staffStringifier = empp.staffStringifier;

const staff = {
  employees: [
    { firstName: 'Miguel', lastName: 'Jones' },
    { firstName: 'Ernie', lastName: 'Bertson' },
    { firstName: 'Nora', lastName: 'Lu' },
    { firstName: 'Sally', lastName: 'Barkyoumb' }
  ],
  managers: [
    { firstName: 'Lillian', lastName: 'Chambers' },
    { firstName: 'Gordon', lastName: 'Poe' }
  ]
};

it('should return an array of strings of each employee and manager', () => {
  expect(staffStringifier(staff)).toEqual([
    'EMPLOYEES',
    '1 - JONES, MIGUEL - 11',
    '2 - BERTSON, ERNIE - 12',
    '3 - LU, NORA - 6',
    '4 - BARKYOUMB, SALLY - 14',
    'MANAGERS',
    '1 - CHAMBERS, LILLIAN - 15',
    '2 - POE, GORDON - 9'
  ]);
});
