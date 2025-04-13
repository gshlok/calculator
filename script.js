let d = "";
let buttons = document.querySelectorAll("button");

function calc(str) {
    for(var i = 0 ; i < str.length ; i++) {
        if(str[i] == "×") str = str.replace("×", "*");
        if(str[i] == "÷") str = str.replace("÷", "/");
    }
    return eval(str).toString();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerText == "DEL") d = d.slice(0, -1);
        else if(button.innerText == "AC") d = "";
        else if(button.innerText == "=") d = calc(d);
        else d += button.innerText;


        if(d == "")  document.querySelector(".display").innerText = "0";
        else document.querySelector(".display").innerText = d;
    })
})