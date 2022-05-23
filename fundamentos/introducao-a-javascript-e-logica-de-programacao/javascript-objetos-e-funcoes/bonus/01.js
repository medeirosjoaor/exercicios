function sum(array) {
  return array.reduce((previous, current) => previous + current);
}

function romanToArabic(string) {
  const array = [];
  const conversion = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

  [...string].forEach((element, index) => {
    array.push(conversion[element]);

    if (conversion[string[index + 1]] > conversion[string[index]]) {
      array[index] *= -1;
    }
  });

  return sum(array);
}

console.log(romanToArabic('MCMLXIII'));
