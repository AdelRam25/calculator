let input = document.getElementById("input");
let buttons = document.getElementsByClassName("button");
let reset = document.getElementById("reset")
let clear = 0

for (let button of buttons) {

  button.onclick = function () {
   

    if (button.innerText == "=") {
        input.value=eval(input.value)
    } 
    else {

      input.value += button.innerText;
    }
  }
  
 
}
reset.onclick = function(){

    clear = ''
    input.value = clear
   
 }

