function mostOccurrences(array) {
  const arr = [];
  const numbers = [];
  const numbersOccurrence = [];
  let occurrences = 1;
  array.sort();

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i + 1]) {
      occurrences += 1;
    } else {
      numbers.push(array[i]);
      numbersOccurrence.push(occurrences);
      occurrences = 1;
    }
  };

  const max = Math.max(...numbersOccurrence);

  for (let i = 0; i < array.length; i += 1) {
    if (numbersOccurrence[i] === max) {
      arr.push(numbers[i]);
    }
  }

  return arr.join(', ');
}

console.log(mostOccurrences([2, 3, 2, 5, 8, 2, 3]));
