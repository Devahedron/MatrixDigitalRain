function randomString(length) {

    var string = "";
    var characters = "";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return string;
}

//document.getElementById("target").innerText = randomString(10);
console.log(randomString(10))