const container = document.getElementById("container");
let data = ["rock","paper","scissor"]
    
const imagePath = {
    scissor:"rock-paper-scissors-296853_640.png",
    paper:"rock-paper-scissors-296855_640.png",
    rock:"rock-paper-scissors-296854_640.png"
}
const imgValue = Object.values(imagePath)

const images = document.createElement("img");
const rule = document.getElementById("rule");
const close = document.getElementById("Close");
const ruleDetail = document.getElementById("rule-detail");
const comScore = document.getElementById("computer-score");
const scissor = document.querySelector(".scissor");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const winAnimation = document.querySelector(".winning");
const line = document.getElementById("lines");
const winLoss = document.getElementById("w-l");
const win = document.querySelector(".win");
const yourScore = document.getElementById("your-score")
const computerResult = document.querySelector(".computer-result");
const loading = document.getElementById("loading");
const play = document.getElementById("play");
const next = document.getElementById("reset");
const all = [rock, scissor, paper];
// let playerScore = 0
// let computerScore = 0

const random = Math.floor(Math.random() * imgValue.length);
let img = (images.src = imgValue[random]);


images.style.height = "100px";
images.style.width = "100px";
// images.style.border = "10px solid blue"
images.style.borderRadius = "50%";
images.classList.add("comp-result");
container.appendChild(images);
images.style.display = "none";
// if (image === "rock-paper-scissors-296853_640.png") {
//     images.style.border = "10px solid blue"
// }
winAnimation.style.display = "none";
ruleDetail.style.display = "none";
close.style.display = "none";
computerResult.style.display = "none";
win.style.display = "none";
play.style.display = "none";
next.style.display = "none";
loading.style.display = "none";

// close button

close.addEventListener("click", () => {
  ruleDetail.style.display = "none";
  close.style.display = "none";
});

rule.addEventListener("click", () => {
  ruleDetail.style.display = "block";
  close.style.display = "flex";
});

//  main






function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

for (let i = 0; i < all.length; i++) {

    const playerChoice = `"${data[i]}"`;

  all[i].addEventListener("click", () => {
    all[i].style.zIndex = "3";
    all[i].style.pointerEvents = "none";
    paper.classList.add("animation1");
    rock.classList.add("animation1");
    scissor.classList.add("animation1");
    line.style.display = "none";
    let win1 = setInterval(function () {
      computerResult.style.display = "block";
    }, 1000);

    setInterval(function () {
      loading.style.display = "block";
      if (img == "rock-paper-scissors-296853_640.png") {
        images.style.border = "10px solid red";
      } else if (img == "rock-paper-scissors-296854_640.png") {
        images.style.border = "10px solid blue";
      } else if (img == "rock-paper-scissors-296855_640.png") {
        images.style.border = "10px solid green";
      }
    }, 2000);
    // winAnimation.style.display = "block"

    let win2 = setInterval(function () {
      images.style.display = "block";
    }, 3500);




    // if (playerChoice === computerChoice) {
    //     return "It's a tie!";
    // }

    if (
        (playerChoice === "rock" && img === "rock-paper-scissors-296853_640.png") ||
        (playerChoice === "paper" && computerChoice === "rock-paper-scissors-296854_640.png") ||
        (playerChoice === "scissor" && computerChoice === "rock-paper-scissors-296855_640.png")
    ) {
        win.style.display = "block"
        winLoss.textContent = "Its Tie"
        against.style.display = "none"


    } else {
        return "Computer wins!";
    }


  });

}
