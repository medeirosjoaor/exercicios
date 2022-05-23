function min(array) {
  const arr = [];
  const min = Math.min(...array);

  array.forEach((element, index) => {
    if (element === min) {
      arr.push(index);
    }
  });

  return arr.join(', ');
}

console.log(min([2, 4, 6, 7, 10, 0, -3]));
