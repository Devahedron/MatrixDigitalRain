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

let numColumns = 80;
let numRows = numColumns;

xIncrement = canvas.width/numColumns;
yIncrement = canvas.height/numRows;

function updateSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#03A062";
    ctx.font = 150/numColumns + "vw Monocraft";
    ctx.fillText(string,
        (x+1/6)*(canvas.width/numColumns),
        (canvas.width*(8/6)/numColumns)+(y*(canvas.width*(8/6)/numColumns)));
}

function drawAll() {
    clearAll();
    updateSize();
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            drawCharAtLoc(randomString(1), x, y);
        }
    }
}

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let columns = [];

for (var x = 0; x < numColumns; x++) {
    columns[x] = [];
    for (var y = 0; y < numRows; y++) {
        columns[x][y] = [0, ""];
    }
}

let rainLength = 10;

function rainDrop() {
    column = Math.floor(Math.random() * numColumns);
    columns[column][0][0] = rainLength;
    columns[column][0][1] = randomString(1);
}

function updateMatrix() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            if (columns[x][y][0]>0) {
                columns[x][y][0]--;
            } else if (columns[x][y][0]==rainLength) {

            }
        }
    }
}

function drawMatrix() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            drawCharAtLoc(columns[x][y][1], x, y);
        }
    }
}

function draw() {
    clearAll();
    updateSize();
    rainDrop();
    updateMatrix();
    drawMatrix();
}

//drawInterval = setInterval(drawAll, 100);