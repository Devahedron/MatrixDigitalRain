
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let numColumns = 80;
let numRows = numColumns;

let FPS = 10;

xIncrement = canvas.width/numColumns;
yIncrement = canvas.height/numRows;

let rainLength = 10;

let columns = [];

for (var x = 0; x < numColumns; x++) {
    columns[x] = [];
    for (var y = 0; y < numRows; y++) {
        columns[x][y] = [0, ""];
    }
}

// Returns random string of desired length
function randomString(length) {

    var string = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789⚥";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return string;
}

// Returns a random character
function randomChar() {
    randomString(1);
}

// Updates the size of the window
function updateSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

// Draws the given character to the given grid location
function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#03A062";
    ctx.font = 150/numColumns + "vw Monocraft";
    ctx.fillText(string,
        (x+1/6)*(canvas.width/numColumns),
        (canvas.width*(8/6)/numColumns)+(y*(canvas.width*(8/6)/numColumns)));
}

// Draws the given character to the given grid location and colors it based on the timer value
function drawCharAtLocFade(string, time, x, y) {
    ctx.fillStyle = "#03A062";
    ctx.font = 150/numColumns + "vw Monocraft";
    ctx.fillText(string,
        (x+1/6)*(canvas.width/numColumns),
        (canvas.width*(8/6)/numColumns)+(y*(canvas.width*(8/6)/numColumns)));
}

// Draws a random character everywhere on the grid
function drawAll() {
    clearAll();
    updateSize();
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            drawCharAtLoc(randomChar(), x, y);
        }
    }
}

// Clears the canvas
function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Creates the start of a rainDrop on the matrix
function rainDrop() {
    column = Math.floor(Math.random() * numColumns);
    columns[column][0][0] = rainLength;
    columns[column][0][1] = randomChar();
}

// Updates all vaules in the matrix for the next frame
function updateMatrix() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            if (columns[x][y][0]==rainLength) {
                if (y+1<numRows) {
                    columns[x][y+1][0] = rainLength+1;
                    columns[x][y+1][1] = randomChar();
                }
            }
            if (columns[x][y][0]>0) {
                columns[x][y][0]--;
            }
            if (columns[x][y][0]==0) {
                columns[x][y][1] = "";
            }
        }
    }
}

// Draws the text of the matrix
function drawMatrix() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            drawCharAtLoc(columns[x][y][1], x, y);
        }
    }
}

// Draws the timer values of the matrix
function debugMatrix() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            drawCharAtLoc(columns[x][y][0], x, y);
        }
    }
}

// Draws the text of the matrix depending on the timer value
function drawMatrixFade() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            drawCharAtLocFade(columns[x][y][1], columns[x][y][0], x, y);
        }
    }
}

// Updates and draws everything
function draw() {
    clearAll();
    updateSize();
    updateMatrix();
    rainDrop();
    rainDrop();
    drawMatrix();
}

// Sets draw() to run at the desired frames per second
drawInterval = setInterval(draw, (1000/FPS));