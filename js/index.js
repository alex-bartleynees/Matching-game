var cards = [
    "./images/Bud-Powell.jpg", "./images/Hank-Mobley.jpg", "./images/Herbie-Hancock123.jpg", "./images/Jackie-McLean1234567.jpg", "./images/JohnnyGriffin.jpg", "./images/SonnyRollins.jpg", "./images/TheloniousMonk.jpg", "./images/Wayne-Shorter23.jpg", "./images/Bud-Powell.jpg", "./images/Hank-Mobley.jpg", "./images/Herbie-Hancock123.jpg", "./images/Jackie-McLean1234567.jpg", "./images/JohnnyGriffin.jpg", "./images/SonnyRollins.jpg", "./images/TheloniousMonk.jpg", "./images/Wayne-Shorter23.jpg"]

//var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", addImage)
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
    var imageIndex = -2;
    console.log(cards);
    let div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
        var img = document.createElement("img");
        img.src = cards[imageIndex]
        img.setAttribute("onclick", "myFunction(this)");

        let classes = div[i].classList;
        let result = classes.contains("card");
        if (result == true) {
            div[i].appendChild(img);
        }
        imageIndex++;
        console.log(imageIndex);
    }

}
startGame();

var newArray = [];

function myFunction (el) {
    var imgSrc = el.src;
    newArray.push(imgSrc);
    console.log(newArray);
}

function addImage () {

    this.classList.add("open")
    this.classList.remove("disabled")
  
    checkMatch();


}

function checkMatch() {
    if (newArray.length == 2 && newArray[0].length == newArray[1].length) {
        newArray = [];
        let div = document.querySelectorAll("div");
        for (let i = 0; i < div.length; i++) {
            let classes = div[i].classList;
            let result = classes.contains("open");
           // let child = document.querySelector('img')
            if (result) 
                div[i].classList.add("match")
            div[i].classList.remove("open");
            
        }
        setTimeout(function(){alert("Match!")}, 1000);
    } else if (newArray.length == 2) {
        unmatched();
    }
}



function unmatched() {
    
 newArray = [];
    let div = document.querySelectorAll("div");
    for (let i = 0; i < div.length; i++) {
        let classes = div[i].classList;
        let result = classes.contains("open");
        let child = document.querySelector('img')
        if (result) {
          
            setTimeout(function(){div[i].classList.add("disabled")}, 1000);
            div[i].classList.remove("open");
        }
    }
}
/* let classes = div.classList;
 let result = classes.contains("open");
 let child = document.querySelector(".open")
 
 div.removeChild(child);
 }
 */



function setBackground() {
    var elements = document.getElementsByClassName("card")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("disabled");
    }
}

setBackground();

function reset () {
    location.reload();
}