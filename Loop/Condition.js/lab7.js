// LAB-7 : Fundamental
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");
if (username === "" || password === "") {
    console.log("Username or password is required");
} else {
    if ((username === "Kim" && password === "1234")) {
        console.log(`Hello , ${username}!`);
    } else {
        console.log("Invalid username or password");
    }
}
