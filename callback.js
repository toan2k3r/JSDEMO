function chaoHoi(ten, callback){
    console.log(`xin Chao ${ten}! ` )
    callback();
}
function tambiet(){
    console.log("Tam Biet");
}
chaoHoi("An", tambiet)
//---------------------------------------
function fechData(callback){
    console.log("Đang tải dữ liệu");
    setTimeout(() => {
       const data = {id:1,name:"Dữ Liệu"}
       callback(data) 
    }, 2000);
}
function processData(data){
    console.log("Nhận được dữ liệu", data);
}
fechData(processData);
//---------------------------------------
const btn = document.getElementById("myBtn");
btn.addEventListener('click', function(){
    console.log("Click nữa đi!");
    alert("Xin Cảm Ơn")
})
//--------------------------------------
function buoc1(callback){
    setTimeout(() => {
        console.log("Bước 1 đã Xong");
        callback();
    }, 1000);
}
function buoc2(callback){
    setTimeout(() => {
        console.log("Bước 2 đã Xong")
        callback();
    }, 1000);
}
function buoc3(callback){
    setTimeout(() => {
        console.log("Bước 3 xong");
        callback()
    }, 1000);
}

buoc1(function(){
    buoc2(function(){
        buoc3(function(){
            console.log("Tat ca Da Xong")
        })
    })
})

// cách làm thứ 2
function hoanTat(){
    console.log("Tất Cả đã hoàn thành")
}
function thucHienBuoc3(){
    buoc3(hoanTat)
}
function ThucHienBuoc2(){
    buoc2(buoc3)
}
buoc1(thucHienBuoc2)
//------------------------
