function randomString(length) {

    var string = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789⚥";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return string;
}

//document.getElementById("text0").innerText = randomString(100);
//document.getElementById("text1").innerText = randomString(100);

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext('2d');


function drawCharAtLoc(string, x, y) {
    ctx.fillStyle = "#03A062";2
    ctx.font = "1.5vw Monocraft";
    ctx.fillText(string, 0+x, 20+y);
}
drawCharAtLoc("Hello World!", 1, 1);