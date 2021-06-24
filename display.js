let task;
let ul = document.querySelector("#ul");
let date = localStorage.getItem('date');
let div = document.querySelector("#add");
let cm = document.querySelector("#currentMonth");
let k = 0;
let month = localStorage.getItem("month");
if (month != null) {
    cm.append(month);
}







for (let i = 0; i < 31; i++) {
    let newDiv = document.createElement("div");
    let ulNew = document.createElement("ul");
    k = 0;
    for (let j = 0; j < 30; j++) {
        task = localStorage.getItem(`${i + 1} June task ${j + 1}`);
        let li = document.createElement('li');
        let h3 = document.createElement("h3");
        if (k < 1) {
            h3.append(`Date: ${i + 1}`);
            k = 2
            newDiv.append(h3);
        }
        if (task != null) {
            li.append(`Task ${j + 1} is ${task} `);
            ulNew.append(li);
            newDiv.append(ulNew)
        }


        div.append(newDiv);
    }
}