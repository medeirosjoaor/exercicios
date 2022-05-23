function max(array) {
  const arr = [];
  const max = Math.max(...array);

  array.forEach((element, index) => {
    if (element === max) {
      arr.push(index);
    }
  });

  return arr.join(', ');
}

console.log(max([2, 3, 6, 7, 10, 1]));
