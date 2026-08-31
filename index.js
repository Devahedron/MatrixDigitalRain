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

let columns = 10;
let rows = columns/2;

xIncrement = canvas.width/columns;
yIncrement = canvas.height/rows;

function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#03A062";
    ctx.font = 150/columns + "vw Monocraft";
    ctx.fillText(string, (x+1/6)*(canvas.width/columns), (canvas.width*(8/6)/columns)+(y*(canvas.width*(8/6)/columns)));
}

function drawAll() {
    for (var x = 0; x < columns; x++) {
        for (var y = 0; y < rows; y++) {
            drawCharAtLoc(randomString(1), x, y);
        }
    }
}

drawAll();