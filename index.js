function randomString(length) {

    var string = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789⚥";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return string;
}

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let columns = 80;
let rows = columns;

xIncrement = canvas.width/columns;
yIncrement = canvas.height/rows;

function updateSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#03A062";
    ctx.font = 150/columns + "vw Monocraft";
    ctx.fillText(string, (x+1/6)*(canvas.width/columns), (canvas.width*(8/6)/columns)+(y*(canvas.width*(8/6)/columns)));
}

function drawAll() {
    clearAll();
    for (var x = 0; x < columns; x++) {
        for (var y = 0; y < rows; y++) {
            drawCharAtLoc(randomString(1), x, y);
        }
    }
}

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let rainDrops = [];
let rainDropLength = 10;

function rainDrop() {
    drawCharAtLoc(randomString(1), (Math.floor(Math.random() * columns)), 0)
}

function draw() {
    clearAll();
    rainDrop();
}

drawInterval = setInterval(drawAll, 100);