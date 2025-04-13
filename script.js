let d = "";

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        d += button.innerText;
        document.getElementsByClassName("display").innerHTML = d;
    })
})