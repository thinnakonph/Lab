const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
const result1 = array1.filter(word => word[0] === 'E');
const result2 = array2.filter(word => word === word.toUpperCase());
const result3 = array3.filter(word => word.toLowerCase().includes('buri'));
console.log(result1);
console.log(result2);
console.log(result3);
