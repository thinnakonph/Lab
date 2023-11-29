//                          เกมทายตัวเลข 
let targetNumber = Math.floor(Math.random() * 99) + 1; // สร้างตัวเลขสุ่มระหว่าง 1 ถึง 99
let attempts = 0;

alert("เกมทายตัวเลขเริ่มต้น!");

while (true) {
    let guess = prompt("ผู้เล่นทายตัวเลข (1-99):");

    if (guess === null) {
        alert("เกมถูกยกเลิก");
        break;
    }

    let playerGuess = parseInt(guess);

    if (!isNaN(playerGuess) && playerGuess >= 1 && playerGuess <= 99) {
        attempts++;

        if (playerGuess === targetNumber) {
            alert(`ยินดีด้วย! คุณทายถูกต้อง เลขที่ถูกคือ ${targetNumber} ใน ${attempts} ครั้ง`);
            break;
        } else {
            let message = playerGuess > targetNumber ? "มากกว่า" : "น้อยกว่า";
            alert(`ผลลัพธ์: เลขที่คุณทาย ${message} เลขที่ถูก`);
        }
    } else {
        alert("กรุณาใส่ตัวเลขระหว่าง 1 ถึง 99");
    }
}