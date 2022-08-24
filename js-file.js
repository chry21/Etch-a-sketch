//html selectors

const body = document.querySelector("body");
const paraValue = document.getElementById("paraValue");
const rangeBar = document.getElementById("rangeBar");
const table = document.getElementById("table");
let squareContainer = document.getElementById("squareContainer");
const colorPicker = document.getElementById("colorPicker");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const controls = document.getElementById("controls")
const colorMode = document.getElementById("colorMode");
const defaultColor = "black";
color = defaultColor;

//addEventListeners

colorMode.addEventListener("click", (e) => {
    e.target.style.border = "5px solid #ff5500";
    eraser.style.border = "none";
    color = colorPicker.value;
});

eraser.addEventListener("click", (e) => {
    e.target.style.border = "5px solid #ff5500";
    colorMode.style.border = "none";
    color = "white";
});

clear.addEventListener("click", clearTable);


function showValue() {
    paraValue.textContent = `${rangeBar.value} x ${rangeBar.value}`;
}

function removeSquares() {
    squareContainer.remove();
    drawSquares(rangeBar.value);    
}

function drawSquares(tableSize) {
    squareContainer = document.createElement("div");
    squareContainer.setAttribute("id", "squareContainer");
    table.appendChild(squareContainer);

    for(let i = 0; i < (tableSize*tableSize); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", `square${i}`)
        square.addEventListener("mouseover", colorSquares)
        squareContainer.style.cssText = `grid-template-columns: repeat(${tableSize}, 1fr);`
        squareContainer.appendChild(square);
    }
}

function colorSquares(e) {
    e.target.style.backgroundColor = color;
}

function clearTable() {
    for(let i = 0; i < rangeBar.value*rangeBar.value; i++) {
        document.getElementById(`square${i}`).style.backgroundColor = "white";
    }
}
removeSquares()

