const sum = (...array) => array.reduce((previous, current) => previous + current);

console.log(sum(1));
console.log(sum(5, 5));
console.log(sum(8, 9, 3, 7));
