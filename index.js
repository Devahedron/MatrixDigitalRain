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

function randomAtLoc(length, loc) {
    var string = "";
    for (var i = 0; i < length; i++) {
        if (i==loc-1) {
            string += randomString(1);
        } else {
            string += " ";
        }
    }

    return string;
}

console.log(randomAtLoc(5, 1));