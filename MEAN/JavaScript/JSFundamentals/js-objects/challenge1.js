'use strict';

const studentCohortStringifier = students => {
  return students.map(
    student => `Name: ${student.name}, Cohort: ${student.cohort}`
  );
};

const studentCohortPrintingPress = studentCohortStringifiedArray => {
  studentCohortStringifiedArray.map(studentCohortString =>
    console.log(studentCohortString)
  );
};

module.exports = { studentCohortStringifier };
