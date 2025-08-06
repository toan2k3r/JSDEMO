function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "JavaScript" };
            resolve(data)
        }, 2000);
    })
}

fetchData()
    .then(data => console.log("Dữ liệu nhận được:", data))
    .catch(error => console.error("Lỗi", error));
//----------------------Chuỗi Promise-----------------------------------
function buoc1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Bước 1 xong"), 1000);
    });
}

function buoc2(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${data} → Bước 2 xong`), 1000);
    });
}

function buoc3(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${data} → Bước 3 xong`), 1000);
    });
}

buoc1()
    .then(result => buoc2(result))
    .then(result => buoc3(result))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.error(error));
//----------------------Promise.All-------------------------------------------
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise(resolve => setTimeout(resolve, 1000, 3));

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values)) // [1, 2, 3] (sau 1 giây)
    .catch(error => console.error(error));
//----------------------Promise.Race--------------------------------------
const promiseFast = new Promise(resolve => setTimeout(resolve, 500, "Nhanh hơn"));
const promiseSlow = new Promise(resolve => setTimeout(resolve, 1000, "Chậm hơn"));

Promise.race([promiseFast, promiseSlow])
  .then(winner => console.log(winner)); // "Nhanh hơn" (sau 0.5 giây)