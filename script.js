let d = "";
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerText == "DEL") d = d.slice(0, -1);
        if(button.innerText == "AC") {d = "";}
        else d += button.innerText;


        if(d == "")  document.querySelector(".display").innerText = "0";
        else document.querySelector(".display").innerText = d;
    })
})