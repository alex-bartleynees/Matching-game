const images = [
    "./images/Bud-Powell.jpg", "./images/Hank-Mobley.jpg", "./images/Herbie-Hancock123.jpg", "./images/Jackie-McLean1234567.jpg", "./images/JohnnyGriffin.jpg", "./images/SonnyRollins.jpg", "./images/TheloniousMonk.jpg", "./images/Wayne-Shorter23.jpg", "./images/Bud-Powell.jpg", "./images/Hank-Mobley.jpg", "./images/Herbie-Hancock123.jpg", "./images/Jackie-McLean1234567.jpg", "./images/JohnnyGriffin.jpg", "./images/SonnyRollins.jpg", "./images/TheloniousMonk.jpg", "./images/Wayne-Shorter23.jpg"]


const card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", revealImage);
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;

}



(function () {

    shuffle(images);
    let imageIndex = -3;
    let div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
        let img = document.createElement("img");
        img.src = images[imageIndex];
        img.setAttribute("onclick", "getSrc(this)");
        let classes = div[i].classList;
        let result = classes.contains("card");
        if (result == true) {
            div[i].appendChild(img);
        }
        imageIndex++;
    }

})();


let openCards = [];

function getSrc(el) {

    let imgSrc = el.src;
    openCards.push(imgSrc);
    if (openCards.length > 2) {
        openCards = [el.src];
    }

}

function revealImage() {

    this.classList.add("open")
    this.classList.remove("disabled")

    checkMatch();


}
let counter = 0;
function checkMatch() {

    if (openCards.length == 2 && openCards[0].length == openCards[1].length) {
        openCards = [];
        let div = document.querySelectorAll("div");
        counter++
        let moves = document.getElementById("moves")
        moves.innerHTML = "Moves: " + counter;

        for (let i = 0; i < div.length; i++) {
            let classes = div[i].classList;
            let result = classes.contains("open");

            if (result) {
                div[i].classList.add("match")
                div[i].classList.remove("open");
                div[i].removeEventListener("click", revealImage);

            }

        }
        setTimeout(function () { alert("Match!") }, 500);
    } else if (openCards.length == 2) {
        unmatch();
        counter++
        moves.innerHTML = "Moves: " + counter;

    }


}



function unmatch() {

    openCards = [];
    let div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
        let classes = div[i].classList;
        let result = classes.contains("open");
        if (result) {

            setTimeout(function () { div[i].classList.add("disabled") }, 500);
            div[i].classList.remove("open");
        }
    }
}


(function () {
    const elements = document.getElementsByClassName("card")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("disabled");
    }
})();


function reset() {
    location.reload();
}