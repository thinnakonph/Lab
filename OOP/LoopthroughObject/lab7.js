const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

function displayEmployeeInfo() {
    const employeeName = prompt("ชื่อ");
    const employee = employees[employeeName];

    if (employee) {
        const { salary, address } = employee;
        console.log(`Name: ${employeeName}, salary: ${salary}, address: ${address.district}, ${address.province}`);
    } else {
        console.log('Not Found');
    }
}
// ตัวอย่างการใช้งาน
displayEmployeeInfo();  // ให้ผู้ใช้ป้อนชื่อพนักงานและแสดงข้อมูล

