let productObject = {};

// รับข้อมูลจากผู้ใช้
let productName = prompt('Enter the product name:');
let quantitySold = parseInt(prompt('Enter the quantity sold:'));
let pricePerPiece = parseFloat(prompt('Enter the price per piece:'));
let discountPercentage = parseFloat(prompt('Enter the discount percentage:'));

// ตรวจสอบว่ามีการกำหนดเปอร์เซ็นต์ลดหรือไม่
if (discountPercentage !== 0) {
    productObject['Discount Percentage'] = discountPercentage;
}

// สร้าง Object ที่เก็บข้อมูล
productObject['Product Name'] = productName;
productObject['Quantity Sold'] = quantitySold;
productObject['Price Per Piece'] = pricePerPiece;

// ฟังก์ชันคำนวณราคาที่แท้จริง (ราคาอย่างรวดเร็ว)
function calculateFinalPrice(product) {
    let discount = product['Discount Percentage'] || 0;
    let finalPrice = (1 - discount / 100) * product['Quantity Sold'] * product['Price Per Piece'];
    return finalPrice.toFixed(2);
}

// แสดง Object ที่เก็บข้อมูล
console.log(productObject);

// คำนวณและแสดงราคาที่แท้จริง
console.log(`The final price is: $${calculateFinalPrice(productObject)}`);
