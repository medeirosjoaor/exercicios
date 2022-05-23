function maxCharacters(array) {
  const arrayLength = [];

  for (let element of array) {
    arrayLength.push(element.length);
  }

  const maxLength = Math.max(...arrayLength);

  return array.filter((element) => element.length >= maxLength).join(', ');
}

console.log(maxCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
