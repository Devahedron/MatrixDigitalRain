
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789⚥";
let defaultCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789⚥";

var numColumns = 80;
let defaultNumColumns = 80;
var numRows = numColumns;
let defaultNumRows = 80;

var FPS = 15;
let defaultFPS = 15;

xIncrement = canvas.width/numColumns;
yIncrement = canvas.height/numRows;

var rainLength = 15;
let defaultRainLength = 15;
var rainDropNum = 3;
let defaultRainDropNum = 3;

let columns = [];

for (var x = 0; x < numColumns; x++) {
    columns[x] = [];
    for (var y = 0; y < numRows; y++) {
        columns[x][y] = [0, ""];
    }
}

// "Get variable" functions:
function getNumColumns() {
    return numColumns;
}
function getNumRows() {
    return numRows;
}
function getCharSet() {
    return charSet;
}
function getFPS() {
    return FPS;
}
function getRainLength() {
    return rainLength;
}
function getRainDropNum() {
    return rainDropNum;
}

function updateVars() {
    pause();
    numColumns = document.getElementById("inputColumns").value;
    numRows = document.getElementById("inputColumns").value;
    charSet = document.getElementById("inputChars").value;
    FPS = document.getElementById("inputFPS").value;
    rainLength = document.getElementById("inputRLength").value;
    rainDropNum = document.getElementById("inputRPF").value;
    unpause();
}

function resetVars() {
    numColumns = defaultNumColumns;
    numRows = defaultNumRows;
    charSet = defaultCharSet;
    FPS = defaultFPS;
    rainLength = defaulTrainLength;
    rainDropNum = defaulTrainDropNum;
}

// Returns random string of desired length
function randomString(length) {

    var string = "";
    var charactersLength = charSet.length;

    for (var i = 0; i < length; i++) {
        string += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return string;
}

// Updates the size of the window
function updateSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

// Draws the given character to the given grid location
function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#00ff99";
    ctx.font = 150/numColumns + "vw Monocraft";
    ctx.fillText(string,
        (x+1/6)*(canvas.width/numColumns),
        (canvas.width*(8/6)/numColumns)+(y*(canvas.width*(8/6)/numColumns)));
}

// Draws the given character to the given grid location and colors it based on the timer value
function drawCharAtLocFade(string, time, x, y) {
    if (time == rainLength) {
        ctx.fillStyle = "white";
    } else if (time == 0) {
        
    } else {
        ctx.fillStyle = "RGBA(0, 255, 153, " + (time/rainLength) + ")";
    }
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
            drawCharAtLoc(randomString(1), x, y);
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
    columns[column][0][1] = randomString(1);
}

// Creates the start of a rainDrop on the matrix
function rainDropMultiple(amount) {
    for (var i = 0; i < amount; i++) {
        column = Math.floor(Math.random() * numColumns);
        columns[column][0][0] = rainLength;
        columns[column][0][1] = randomString(1);
    }
}

// Updates all vaules in the matrix for the next frame
function updateMatrix() {
    for (var x = 0; x < numColumns; x++) {
        for (var y = 0; y < numRows; y++) {
            if (columns[x][y][0]==rainLength) {
                if (y+1<numRows) {
                    columns[x][y+1][0] = rainLength+1;
                    columns[x][y+1][1] = randomString(1);
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
    rainDropMultiple(rainDropNum);
    drawMatrixFade();
}

function drawNoFade() {
    clearAll();
    updateSize();
    updateMatrix();
    rainDropMultiple(rainDropNum);
    drawMatrix();
}

function drawDebug() {
    clearAll();
    updateSize();
    updateMatrix();
    rainDropMultiple(rainDropNum);
    debugMatrix();
}

// Sets draw() to run at the desired frames per second
drawInterval = setInterval(draw, (1000/FPS));
drawNoFadeInterval = false;
drawDebugInterval = false;

function pause() {
    clearInterval(drawInterval);
    clearInterval(drawNoFadeInterval);
    clearInterval(drawDebugInterval);
    drawInterval = false;
    drawNoFadeInterval = false;
    drawDebugInterval = false;
}

function unpause() {
    if (drawInterval==false) {
        drawInterval = setInterval(draw, (1000/FPS));
    }
}

function toggleSettings() {
    if (document.getElementById('settingsPanel').style.display=='block') {
        document.getElementById('settingsPanel').style.display ='none';
    } else {
        document.getElementById('settingsPanel').style.display ='block';
    }
}

function toggleFade() {
    if (drawNoFadeInterval==false) {
        clearInterval(drawInterval);
        clearInterval(drawDebugInterval);
        drawInterval = false;
        drawDebugInterval = false;

        drawNoFadeInterval = setInterval(drawNoFade, (1000/FPS));
    } else if (drawInterval==false) {
        clearInterval(drawNoFadeInterval);
        clearInterval(drawDebugInterval);
        drawNoFadeInterval = false;
        drawDebugInterval = false;
        drawInterval = setInterval(draw, (1000/FPS));
    }
}

function toggleDebug() {
    if (drawDebugInterval==false) {
        clearInterval(drawInterval);
        clearInterval(drawNoFadeInterval);
        drawInterval = false;
        drawNoFadeInterval = false;

        drawDebugInterval = setInterval(drawDebug, (1000/FPS));
    } else if (drawInterval==false) {
        clearInterval(drawDebugInterval);
        clearInterval(drawNoFadeInterval);
        drawDebugInterval = false;
        drawNoFadeInterval = false;

        drawInterval = setInterval(draw, (1000/FPS));
    }
}