// LAB-8 : Challenge
let score = prompt("Enter your score:");
score = parseFloat(score);
if (!isNaN(score)) {
    if (score >= 80) {
        console.log("Grade: A");
    } else if (score >= 70) {
        console.log("Grade: B");
    } else if (score >= 60) {
        console.log("Grade: C");
    } else if (score >= 50) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
} else {
    console.log("Invalid score. Please enter a valid number.");
}
