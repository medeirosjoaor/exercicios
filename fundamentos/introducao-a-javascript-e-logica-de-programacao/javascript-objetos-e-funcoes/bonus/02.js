function arrayOfNumbers(vector) {
  const arr = [];

  [...vector].forEach((array) => array.forEach((element) => {
    if (element % 2 === 0) {
      arr.push(element);
    }
  }));

  return arr;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));
