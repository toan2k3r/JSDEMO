// YYYY/DD/MM, DD/MM/YYYY, MM/DD/YYYY

function today(params) {
    console.log(params);
    const today = new Date()
    if (params === "YYYY/DD/MM") {
        return `${today.getFullYear()}/${today.getDate()}/${today.getMonth}`
    } else if (params === "DD/MM/YYYY") {
        return `${today.Date()}/${today.getMonth()}/${today.getFullYear}`
    } else if (params === "MM/DD/YYYY") {
        return `${today.getMonth()}/${today.getDate()}/${today.getFullYear}`
    } else {
        console.log("Viet Lai de ");
    }
}

console.log(today("DD/MM/YYYY"));
