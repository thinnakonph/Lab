function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function printPrime(maxNumber) {
    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// ตัวอย่างการเรียกใช้ฟังก์ชัน
let maxNumber = parseInt(prompt('Enter a number:'));
printPrime(maxNumber);
