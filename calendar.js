let date = new Date();
var monthStore;
let a = document.querySelectorAll("a");
const callBack = function () {

    date.setDate(1);

    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    const firstDayIndex = date.getDay();
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let month = date.getMonth();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    const nextDays = 7 - lastDayIndex - 1;
    document.querySelector(".date h1").innerHTML = months[month];
    monthStore = document.querySelector(".date h1").innerHTML;
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today div"><a href="/todo.html">${i}</a></div>`;
        } else {
            days += `<div class="div"><a href="/todo.html">${i}</a></div>`;
        }

    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class='next-date'>${j}</div>`
    }
    monthDays.innerHTML = days;
}


document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    a = document.querySelectorAll("a");
    callBack();

})
document.querySelector(".previous").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    a = document.querySelectorAll("a");
    callBack();





})
callBack();



a = document.querySelectorAll("a");

for (let i of a) {
    i.addEventListener("click", () => {

        console.log(monthStore)
        localStorage.setItem("date", `${i.innerHTML} ${monthStore}`)
        localStorage.setItem("month", `${monthStore}`)
    })
}