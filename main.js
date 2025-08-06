// var firstName = 'Toan';
// var lastName = 'Van'

// console.log(`Toi La : ${firstName} ${lastName}`)

// //Lam vc vs String
// //Kiem Tra Do dai
// console.log(firstName.length);
// // Find Index
// console.log(firstName.indexOf('a'))
// //cut string
// console.log(firstName.slice(0))
// //replace
// console.log(firstName.replace('Toan', 'Phung '))
// // function showDialog(){
// //   alert('HI chao cac ban');
// // }
// // showDialog();

// // function writeLog(message,message2){
// //   console.log(message);
// //   console.log(message2);
// // }
// // writeLog('Test')

// // var x = 1;

// // if (x === 1) {
// //   var x = 2;

// //   console.log(x);
// //   // Expected output: 2
// // }

// // console.log(x);
// // // Expected output: 2
// // var name1;
// // var name1 = value1;
// // var name1 = value1, name2 = value2;
// // var name1, name2 = value2;
// // var name1 = value1, name2, /* …, */ nameN = valueN;

// // function foo() {
// //   var x = 1;
// //   function bar() {
// //     var y = 2;
// //     console.log(x); // 1 (function `bar` closes over `x`)
// //     console.log(y); // 2 (`y` is in scope)
// //   }
// //   bar();
// //   console.log(x); // 1 (`x` is in scope)
// //   console.log(y); // ReferenceError, `y` is scoped to `bar`
// // }

// // foo();

// // for (var a of [1, 2, 3]);
// // console.log(a); // 3
// // let 

// myName = "Chris"

// function logName() {
//   console.log(myName);
// }
// logName();
// var myName

// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");

// let count = 1;
// buttonA.onclick = () => {
//   console.log([buttonA]);

//   buttonA.textContent = "try Again";
//   headingA.textContent = `${count} click so far`
//   console.log(headingA);

//   count += 1
// }
// //Example with var
// // vảr có thể ghi đè. lấy data từ ngoài vòng {}
// function varExample() {
//   if (true) {
//     var x = 10;
//     console.log("Inside block(var):", x);
//   }
//   console.log("outside block(var):", x);
// }
// varExample();
// // example with let
// //let có thể ghi đè nhưng không thể lấy ngoài vòng {}
// function letExample() {
//   if (true) {
//     let y = 20;
//     console.log("Insite block(let):", y);
//   }
//   console.log("outSite block(let):", y);

// }
// letExample();

var name = "Nguyễn Văn A";
console.log(name); // "Nguyễn Văn A"


// console.log(age); // undefined (biến đã khai báo nhưng chưa gán giá trị)
console.log("day ne");

age = 25;
console.log(age); // 25
var age = 24;
a = 2;
console.log(a);
var a = 10;


console.log("result:", add(5, 7));
function add(x, y) {
  return x + y;
}


//  for (let index = 0; index < 5; index++) {// let thì sài được bt ( in ra từ 0-4)
//   setTimeout(()=> console.log(index), 1000)//var in thẳng giá trị cuối cùng
//   // const o thể in ra vì const không thay đổi giá trị
//  }

function myFunction() {
  var localVarible = " im Local Host"
  console.log(localVarible);
}
myFunction();
// console.log(localVarible);// không thể truy cập từ bên ngoài

var globalVariable = "i am Global";

function demoScope() {
  var functionScopeValiable = " i am function Scope";
  if (true) {
    var blockScopeValiable = "i am block scope"
    console.log(blockScopeValiable);

  }
  console.log(functionScopeValiable);
console.log(blockScopeValiable);

}
demoScope();
console.log(globalVariable);
//////////////////////////////////////////////////////////
const student = {
 name : "toan",
age : 18,
grades : [ 23,34,6745] 
}
student.isGraduated = false
console.log(student);

delete student.age
console.log( student.grades[1]);
const today = new Date( );


console.log(today.toLocaleDateString("vi-VN",{
  year: "numeric",
month: "numeric",
  day: "numeric"
}) );
