let input = document.querySelector("#input");
let ul = document.querySelector(".ul");
let button = document.querySelector("#btn");
let date = localStorage.getItem('date');
let j = 0;

{/* <li class="li">
<span>hello</span>
<i class="fas fa-trash-alt"></i>
</li> */}
button.addEventListener("click", append)

function append() {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let values = input.value;
    i.classList.add("fas");
    i.classList.add("fa-trash-alt");
    li.classList.add("li")
    span.classList.add("span")

    if (values) {

        span.append(values);
        li.append(span);
        li.append(i);
        ul.append(li)
    }

    input.value = "";



    if (j < 100) {
        localStorage.setItem(`${date} task ${j + 1}`, values);
        j++;

    }
    i.addEventListener("click", () => {
        li.classList.add("none");


    })


}





