function Numbers(...numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    return numbers.reduce((accumulator, currentNumber) => accumulator * currentNumber, 1);
  }
  const result = Numbers(2, 3, 4, 5,6,5,8,9,8,5,6,2,65,);
  console.log(result);