let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let colorBtn = document.querySelector('#colorChange');
let num = document.querySelectorAll(".numbers");
let clockBg = document.querySelector(".clocks");
let disableBtn = document.querySelector(".disable");
let btn2 = document.querySelector("#btn2");
let hr = document.querySelector("#hrs")
let min = document.querySelector("#mins")
let sec = document.querySelector("#secs")
let clockSize = document.querySelector("#sizes")
let backTo = document.querySelector(".backTo")


function clock() {
    const date = new Date();
    const s = date.getSeconds() / 60;
    const m = (s + date.getMinutes()) / 60;
    if (date.getHours() < 12) {
        const h = (m + date.getHours()) / 12;
        move(hours, h);
    }
    else {
        const h = (((m + date.getHours() - 12)) / 12);
        move(hours, h);
    }


    move(seconds, s);
    move(minutes, m)
}
function move(element, rotation) {

    element.style.setProperty('--rotate', rotation * 360);

}
clock();


setInterval(clock, 1000);


colorBtn.addEventListener("click", () => {
    for (let i of num) {
        i.style.color = "white";
    }
    clockBg.style.backgroundColor = "black";


})



disableBtn.addEventListener("click", () => {
    for (let i of num) {
        i.style.color = "black";
    }
    clockBg.style.backgroundColor = "rgba(255,255,255,0.5)";

})

btn2.addEventListener("click", () => {

    hr.classList.add("hr");
    min.classList.add("min");
    sec.classList.add("sec");
    clockSize.classList.add("size");
})
backTo.addEventListener("click", () => {

    hr.classList.remove("hr");
    min.classList.remove("min");
    sec.classList.remove("sec");
    clockSize.classList.remove("size");
})

