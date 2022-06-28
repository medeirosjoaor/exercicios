const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students, grades) => {
  return grades
              .map((element, index) => ({ [students[index]]: element
              .reduce((previous, current) => previous + current) / element.length }));
}

console.log(studentAverage(students, grades));
