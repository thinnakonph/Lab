//                  Mini-workshop : Login System

let user = prompt("กรุณาใส่ชื่อผู้ใช้:");
switch (true) {
    case user === null || user.trim() === "":
        user = "guest";
        break;
    
    case user === "codecamp":
        let password = prompt("กรุณาใส่รหัสผ่าน:");

        switch (password) {
            case "123456":
                alert("Welcome");
                break;
            
            default:
                alert("Wrong password");
        }
        break;

    default:
        user = "guest";
        alert("Welcome");
        break;
}