let str = '31 45 12 67 34 86 23 37 19 41';
const numbers = str.split(' ').map(Number);
const result = numbers.filter(number => number < 40).reduce((sum, number) => sum + number, 0);
console.log(result);
