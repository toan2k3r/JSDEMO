async function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "john" })
        }, 1000);
    })

}
getresolve = (resolve) => {
    return setTimeout(() => {
        resolve(["Post1", "Post2"]);
    }, 1500);
}
async function fetchPosts() {
    return new Promise(
        getresolve
    )
}

async function getData() {
    try {
        const [user, posts] = await Promise.all([fetchUser(), fetchPosts()])
        console.log("User: ", user);
        console.log("Posts: ", posts);
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
getData()

//---------------------------------------------------------------------
async function sendEmail(email) {
    return new Promise(resolve => {
        setTimeout(() =>
            resolve(`Email gửi đến ${email}thành công`), 500)
    })
}
async function sendAllEmails(emails) {
    for(const email of emails){
        const result = await sendEmail(email);
        console.log(result);
    }
    console.log("Hoàn tất gửi email");
}
sendAllEmails(["user1@example.com","user2@example.com"])
//-----------------------------------------------------------------------
async function unstableAPI() {
    return new Promise((resolve,reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            isSuccess ? resolve("Data loaded!") : reject("API failed")
        }, 1000);
    })
}
async function fetchWithRetry(retries = 3) {
    try {
        const result = await unstableAPI();
        console.log("Thành công:", result);
        
    } catch (error) {
        if (retries > 0) {
            console.log(`THử Lại...($(retries)lần còn lại)`);
            await new Promise(resolve => setTimeout(resolve,1000));
            return fetchWithRetry(retries -1);
        }
        console.error("Lỗi cuối cùng:",error);
        
    }
}
fetchWithRetry()
//----------------------------------------------------------------
async function fetchSlowData() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => resolve("Data loaded!"),3000);
        const abort = () => {
            clearTimeout(timeout)
            reject(new Error("Request bị hủy!"))
        };
        return {abort}
    });
}

async function run() {
    const controller = new AbortController();
    const {signal} = controller
    try {
        const data = await new Promise(async(resolve,reject) => {
            signal.addEventListener("abort",()=> reject(new Error("Hủy thủ công!")));
            const result = await fetchSlowData();
            resolve(result)
        });
        console.log(data);
    } catch(error){
        console.error(error.message);
    }
}
run();
setTimeout(() => controller.abort(),1500)
