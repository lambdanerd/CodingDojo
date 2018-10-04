const scpp = require('./challenge1');
const studentCohortStringifier = scpp.studentCohortStringifier;

const students = [
  { name: 'Remy', cohort: 'Jan' },
  { name: 'Genevieve', cohort: 'March' },
  { name: 'Chuck', cohort: 'Jan' },
  { name: 'Osmund', cohort: 'June' },
  { name: 'Nikki', cohort: 'June' },
  { name: 'Boris', cohort: 'June' }
];

it('should return an array of strings of each student and their cohort', () => {
  expect(studentCohortStringifier(students)).toEqual([
    'Name: Remy, Cohort: Jan',
    'Name: Genevieve, Cohort: March',
    'Name: Chuck, Cohort: Jan',
    'Name: Osmund, Cohort: June',
    'Name: Nikki, Cohort: June',
    'Name: Boris, Cohort: June'
  ]);
});
