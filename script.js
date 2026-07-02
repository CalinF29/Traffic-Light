const buton = document.querySelector("#trafficlight");

let state = 0;
function changeColor() {
if (state == 0) {
    buton.style.backgroundColor = "yellow";
        state = 1;
    }
    else if (state == 1) {
        buton.style.backgroundColor = "green";
        state = 2;
    }
    else {
        buton.style.backgroundColor = "red";
        state = 0;
    }
}

buton.addEventListener("click",changeColor);
setInterval(changeColor, 10000); 
  