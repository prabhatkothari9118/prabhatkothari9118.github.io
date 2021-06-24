function time() {
    let hours = document.getElementById("hour")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;

}
setInterval(time, 1000);
