//Day 29
// รับตัวเลขจากผู้ใช้
let number1 = parseInt(prompt('กรุณาป้อนตัวเลขที่ 1:'));
let number2 = parseInt(prompt('กรุณาป้อนตัวเลขที่ 2:'));
let number3 = parseInt(prompt('กรุณาป้อนตัวเลขที่ 3:'));
let numbers = [number1, number2, number3];
numbers.sort(function(a, b) {
    return b - a;
});
console.log('ตัวเลขที่เรียงกันจากมากไปน้อย:', numbers);
