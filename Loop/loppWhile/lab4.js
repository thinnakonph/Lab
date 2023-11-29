//              Lab4  Count Digit

let userInput = prompt("กรุณาป้อนตัวเลข:");
let userNumber = parseInt(userInput);
if (!isNaN(userNumber)) {
    let digitCount = Math.floor(Math.log10(userNumber)) + 1;
    console.log(`จำนวนหลักของ ${userNumber} คือ ${digitCount}`);
} else {
    console.log("กรุณาป้อนตัวเลขที่ถูกต้อง");
}