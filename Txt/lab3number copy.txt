function calculatePoints(salesAmount) {
    const point100Baht = 1;
    return Math.floor(salesAmount / 100) * point100Baht;
}
const salesAmount = alert = prompt("ใส่ราคา");
const pointsEarned = calculatePoints(salesAmount);
console.log(`ยอดซื้อขาย ${salesAmount} บาท ได้แต้ม ${pointsEarned} คะแนน`);
