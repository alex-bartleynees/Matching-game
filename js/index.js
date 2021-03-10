var cards = [
    "./images/Bud-Powell.jpg", "./images/Hank-Mobley.jpg", "./images/Herbie-Hancock123.jpg", "./images/Jackie-McLean1234567.jpg", "./images/JohnnyGriffin.jpg", "./images/SonnyRollins.jpg", "./images/TheloniousMonk.jpg", "./images/Wayne-Shorter23.jpg", "./images/Bud-Powell.jpg", "./images/Hank-Mobley.jpg", "./images/Herbie-Hancock123.jpg", "./images/Jackie-McLean1234567.jpg", "./images/JohnnyGriffin.jpg", "./images/SonnyRollins.jpg", "./images/TheloniousMonk.jpg", "./images/Wayne-Shorter23.jpg"]


var card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", revealImage);
}

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;

}



function startGame() {

    shuffle(cards);
    var imageIndex = -3;
    let div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
        var img = document.createElement("img");
        img.src = cards[imageIndex];
        img.setAttribute("onclick", "getSrc(this)");
        let classes = div[i].classList;
        let result = classes.contains("card");
        if (result == true) {
            div[i].appendChild(img);
        }
        imageIndex++;
    }

}
startGame();

var newArray = [];

function getSrc(el) {
    var imgSrc = el.src;
    newArray.push(imgSrc);
}

function revealImage() {

    this.classList.add("open")
    this.classList.remove("disabled")

    checkMatch();


}
var counter = 0;
function checkMatch() {

    if (newArray.length == 2 && newArray[0].length == newArray[1].length) {
        newArray = [];
        let div = document.querySelectorAll("div");
        counter++
        var moves = document.getElementById("moves")
        moves.innerHTML = "Moves: " + counter;

        for (let i = 0; i < div.length; i++) {
            let classes = div[i].classList;
            let result = classes.contains("open");

            if (result) {
                div[i].classList.add("match")
                div[i].classList.remove("open");
            }

        }
        setTimeout(function () { alert("Match!") }, 1000);
    } else if (newArray.length == 2) {
        unmatched();
        counter++
        var moves = document.getElementById("moves")
        moves.innerHTML = "Moves: " + counter;

    }


}



function unmatched() {

    newArray = [];
    let div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
        let classes = div[i].classList;
        let result = classes.contains("open");
        if (result) {

            setTimeout(function () { div[i].classList.add("disabled") }, 1000);
            div[i].classList.remove("open");
        }
    }
}


function hideImages() {
    var elements = document.getElementsByClassName("card")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("disabled");
    }
}

hideImages();

function reset() {
    location.reload();
}