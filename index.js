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

let columns = 100;

function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#03A062";
    ctx.font = 150/columns + "vw Monocraft";
    ctx.fillText(string, 0+x, (canvas.height*3/columns)+y);
}

drawCharAtLoc("Hello World!", 0, 0);