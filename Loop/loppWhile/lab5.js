//              Lab5   Sum Digit

let userInput = prompt("กรุณาป้อนตัวเลข:");
let userNumber = parseInt(userInput);
if (!isNaN(userNumber)) {
    let digitSum = sumDigitsWithWhile(userNumber);
    console.log(`ผลรวมของเลขแต่ละลักษณะใน ${userNumber} คือ ${digitSum}`);
}else{
    console.log("กรุณาใส่เลขที่ถูกต้อง")
}
function sumDigitsWithWhile(number) {
    const numberString = number.toString();
    let digitSum = 0;
    let index = 0;
    while (index < numberString.length) {
        const digitValue = parseInt(numberString[index]);
        digitSum += digitValue;
        index++;
    }
    return digitSum;
}