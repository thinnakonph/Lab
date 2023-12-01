const state1 = { username: 'john', point: 100, loading: true };
const state2 = {state1, loading: false, point: 75 };
state2.success = true;
for (let [key, value] of Object.entries(state1)) {
    console.log(key, value);
}
for (let [key, value] of Object.entries(state2)) {
    console.log(key, value);
}


// console.log(state2);


//Code for in ดู key value ใน object 


// }
// let myObject = {
//     state1: {
//       loading: false,
//       point: 75,
//       success: true
//     }
//   };
  
//   // ตัวอย่างการเข้าถึง property ใน Object
//   console.log(myObject.state1.loading); // false
//   console.log(myObject.state1.point); // 75
//   console.log(myObject.state1.success); // true
  