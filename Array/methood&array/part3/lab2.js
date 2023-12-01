const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
const indices = alphabets.reduce((acc, currentChar, currentIndex) => {
  if (currentChar === 'a') {
    acc.push(currentIndex);
  }
  return acc;
}, []);
console.log(indices);
