'use strict';

const nameLength = (firstName, lastName) => {
  return firstName.length + lastName.length;
};

const nameSetter = (firstName, lastName) => {
  return `${lastName.toUpperCase()}, ${firstName.toUpperCase()}`;
};

const personStringifier = (person, index) => {
  let name = nameSetter(person.firstName, person.lastName);
  let length = nameLength(person.firstName, person.lastName);
  return `${index + 1} - ${name} - ${length}`;
};

const staffStringifier = staff => {
  let empp = [];
  for (const role in staff) {
    empp.push(`${role.toUpperCase()}`);
    staff[role].map((person, index) =>
      empp.push(personStringifier(person, index))
    );
  }
  return empp;
};

const staffPrintingPress = staff => {
  staffStringifier(staff).map(staffString => console.log(staffString));
};

module.exports = { staffStringifier };
