for (let index = 1; index <= 10; index++) {
    console.log(index);
}

let sum = 0
const n = 10
for (let index = 1; index <= n; index++) {
    sum += index;
}
console.log(sum);



for (let index = 1; index < 20; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

const colors = ["red", "Grean", " Blue"];
for (let color of colors) {
    console.log(color);
}

let str = " Hello"
let reversed = ""
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
}
console.log(reversed);

const numbers = [5, 12, 19, 8, 13];
let max = numbers[0];
for (let num of numbers) {
    if(num > max)max = num; 
}
console.log(max);
// TẠO BẢNG CỬU TRƯƠNG 2 ĐẾN 9
for (let x = 2; x <= 9; x++) {
    for (let y = 1; y <= 10; y++) {
        console.log(`${x} x ${y} = ${x*y}`);
    }
}
function gt(params){
    let m =1;
    for (let z = 1; z <= params; z++) {
   m  *= z
  console.log(m);
  
  } 
  return m
}

console.log(gt(5));

