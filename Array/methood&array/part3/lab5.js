const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
   ];
const cherriesItem = inventory.find(item => item.name === 'cherries');
console.log(cherriesItem);
