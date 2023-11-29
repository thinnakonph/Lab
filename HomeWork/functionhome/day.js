function convertDaysToHoursMinutesSeconds(days) {
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;

    // คำนวณจำนวนวินาทีทั้งหมด
    let totalSeconds = days * hoursInDay * minutesInHour * secondsInMinute;

    // คำนวณจำนวนชั่วโมง
    let hours = Math.floor(totalSeconds / (minutesInHour * secondsInMinute));
    totalSeconds %= minutesInHour * secondsInMinute;

    // คำนวณจำนวนนาที
    let minutes = Math.floor(totalSeconds / secondsInMinute);
    totalSeconds %= secondsInMinute;

    // คำนวณจำนวนวินาที
    let seconds = totalSeconds;

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// ตัวอย่างการเรียกใช้ฟังก์ชัน
let days = parseInt(prompt('Enter the number of days:'));
let result = convertDaysToHoursMinutesSeconds(days);
console.log(`${days} days is equal to:`);
console.log(`${result.hours} hours, ${result.minutes} minutes, and ${result.seconds} seconds.`);
