function max(a, b, c, d) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') 
    {
        return undefined; // ถ้ามีตัวเลขไม่ครบ 4 ตัวให้คืนค่า undefined
    }
    return Math.max(...arguments);
}

// ตัวอย่างการเรียกใช้ฟังก์ชัน
let result = max();
console.log(result); // undefined
result = max(2,0,0,0);
console.log(result); // 2
result = max(3,1,0,0);
console.log(result); // 3
result = max(7,3,9,2);
console.log(result); // 9
