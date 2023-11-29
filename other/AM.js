//dat 28

// Lab1
// let person ;
// let name ;
// name = "Kim";
// person = name;
// alert(person);
// ans KIM

// Lab2
// let myMonny;
// let myMom;
// let myFather;

// Lab3
// const  user = "i am helo";
// const role = "KIM";
// console.log(`Hello ${name} var ${role}`)
// ans Hello Kim var KIM

// Lab4
// const firstName = "Thinnakon";
// let lasName = "Phuchomthong";
// var nickname = "Kim";

// firstName = "Purachai";
// lasName = "MemaKun";
// nickname = "Fuse";

// Lab5
// let name = "Kim";
// let surname = "Phu";
// let age = "32";
// let home = "Sarakam"
// console.log("Full Name: "+name+ " "+ "SurName: "+surname +" "+ "Age: "+age +" "+"Home: "+ home)
// ans Full Name: Kim SurName: Phu Age: 32 Home: Sarakam

// Lab6
// let BRAND_NAME = "i am a helo"
// alert(BRAND_NAME)
// พิมพ์ตัวใหญ่ในกรณี ตัวแปรซ่ำกัน 

// Lab7
// const country = 'Thailand';
// const continent = 'Asia';
// console.log(`number is ${2}`);
// console.log(`result is ${1 + 3}`);
// console.log(`I live in ${country}`);
// console.log(`I live in ${country}, ${continent}`);
// console.log(`I live in ${country + ', ' + continent}`);
// console.log(`I live in ${'country, continent'}`);
// ans 
// VM577:3 number is 2
// VM577:4 result is 4
// VM577:5 I live in Thailand
// VM577:6 I live in Thailand, Asia
// VM577:7 I live in Thailand, Asia
// VM577:8 I live in country, continent

// Variable
// lab 1
//     let a = 0;
//     a++
//     a += 3;
//     a *= 17;
//     a %= 7;
//     console.log(a)
//     ans 5

// LAB2
// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;
// console.log(b);
// ans 2

//                          Comparison
// String Compare : Example
// console.log('A' < 'Z'); // true
// console.log('A' < 'a'); // true
// console.log('coco' < 'code'); // true
// console.log('1' < '2'); // true
// console.log('Be' < 'Bee'); // true

// Lab1 
// console.log('1' > 4);
// console.log('' <= 1);
// console.log('apple' > 'pineapple');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN !== 2);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// ans 
// VM708:1 false
// VM708:2 true
// VM708:3 false
// VM708:4 true
// VM708:5 false
// VM708:6 true
// VM708:7 false
// VM708:8 false

//                  Logical Operator

// LAB : Guest Result
// alert(null || 2 || undefined);
// ans 2
// alert(alert(1) || 2 || alert(3));
// ans 1 && 2
// alert(1 && null && 2);
// ans null
// alert(alert(1) && alert(2));
// ans 1 และ undefined
// alert(null || (2 && 3) || 4);
// ans 3


// โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน
// if (-1 || 0) alert('first');
// ans first
// if (-1 && 0) alert('second');
// ans ไม่ทำงาน
// if (null || (-1 && 1)) alert('third');
// ans third