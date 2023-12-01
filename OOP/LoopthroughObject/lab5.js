let fruitObject = {};

while (true) {
    let fruit = prompt('Enter the type of fruit (or type "stop" to finish):');
    
    if (fruit.toLowerCase() === 'stop') {
        break;
    }

    let quantity = parseInt(prompt(`Enter the quantity for ${fruit}:`));

    // ถ้ามีมากกว่า 1 ผลไม้ใน quantity, เพิ่ม "s" ไปที่ key
    let key = quantity > 1 ? fruit + 's' : fruit;
    
    fruitObject[key] = quantity;
}

console.log(fruitObject);
