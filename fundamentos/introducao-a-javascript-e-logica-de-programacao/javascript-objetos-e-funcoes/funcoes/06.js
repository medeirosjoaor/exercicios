function sum(number) {
  let sum = 0;

  for (let i = number; i > 0; i -= 1) {
    sum += i;
  }

  return sum;
}

console.log(sum(5));
