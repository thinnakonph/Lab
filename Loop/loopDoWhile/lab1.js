//                  LabDo while Loop
let total = 0;
let count = 0;
do {
    let userInput = prompt("กรุณาป้อนตัวเลข:");
    // ตรวจสอบว่าผู้ใช้กด cancel, esc, หรือป้อนค่าว่าง
    if (userInput === null || userInput === "" || userInput.toLowerCase() === "esc") {
        console.log("การรับ input ถูกยกเลิก");
        break;  // ออกจากลูปเมื่อผู้ใช้ยกเลิก
    }
    let userNumber = parseFloat(userInput);
    if (!isNaN(userNumber)) {
        total += userNumber;
        count++;
    } else {
        console.log("กรุณาป้อนตัวเลขที่ถูกต้อง");
    }
} while (true);

let average = count === 0 ? 0 : total / count;

console.log(`ผลรวมทั้งหมด: ${total}`);
console.log(`จำนวนตัวเลข: ${count}`);
console.log(`ค่าเฉลี่ย: ${average}`);