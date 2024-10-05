// Definieren von der Variable n 
let n = 10;
console.log(n);

// Erhöhe n um 1 
n = n + 2;
console.log(n);


// Moves the heart element, when the button is pressed.
function buttonPressed() {
    n++;
    document.getElementById("heart").style.top = n + "5px"; 
    document.getElementById("heart").style.left = n + "2px"; 
}

// Moves the heart element back to its previous position.
function moveBack() {
    n--;
    document.getElementById("heart").style.top = (200 + n * 5) + "px";
    document.getElementById("heart").style.left = (n * 2) + "px";
}

// Creates new Element
function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random'); 
    document.body.appendChild(div);
}

// Starts the Animation for the Circle
function starteAnimation() {
    let element = document.getElementById('kreis2'); 
    element.style.animationPlayState = "running";
}

// window.addEventListener("scroll", starteAnimation);
