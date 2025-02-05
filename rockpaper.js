const container = document.getElementById("container");
let data = ["rock", "scissor", "paper"];

const imagePath = {
  scissor: "rock-paper-scissors-296853_640.png",
  rock: "rock-paper-scissors-296854_640.png",
  paper: "rock-paper-scissors-296855_640.png",
};
const imgValue = Object.values(imagePath);

const images = document.createElement("img");
const rule = document.getElementById("rule");
const close = document.getElementById("Close");
const ruleDetail = document.getElementById("rule-detail");
const comScore = document.getElementById("computer-score");
const yourScore = document.getElementById("player-score");

const scissor = document.querySelector(".scissor");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
// const winAnimation = document.querySelector(".winning");
const line = document.getElementById("lines");
const winLoss = document.getElementById("w-l");
const win = document.querySelector(".win");
const computerResult = document.querySelector(".computer-result");
const loading = document.getElementById("loading");
const play = document.getElementById("play");
const next = document.getElementById("reset");
const all = [rock, scissor, paper];
// let playerScore = 0;
// let computerScore = 0;
let win1,win2,win3;

// const random = Math.floor(Math.random() * imgValue.length);
// let img = (images.src = imgValue[random]);

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
// winAnimation.style.display = "none";
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

function getWinner(playerChoice,img) {
  if (
    (playerChoice === "rock" &&
      img === "rock-paper-scissors-296853_640.png") ||
    (playerChoice === "paper" &&
      img === "rock-paper-scissors-296854_640.png") ||
    (playerChoice === "scissor" &&
      img === "rock-paper-scissors-296855_640.png")
  ) {
    win.style.display = "block";
    winLoss.textContent = "You Win";
    playerScore++;
    yourScore.textContent = playerScore;
    // winAnimation.style.display = "block";

    // against.style.display = "block"
  } else if (
    (playerChoice === "rock" &&
      img === "rock-paper-scissors-296854_640.png") ||
    (playerChoice === "paper" &&
      img === "rock-paper-scissors-296855_640.png") ||
    (playerChoice === "scissor" &&
      img === "rock-paper-scissors-296853_640.png")
  ) {
    win.style.display = "block";
    against.style.display = "none";

    winLoss.textContent = "Its Tie";
  } else {
    win.style.display = "block";
    win.style.left = "12vw";
    winLoss.textContent = "Computer Wins";
    against.style.display = "none";
    computerScore++;
    comScore.textContent = computerScore;
    // let animation1 = document.createElement("p")
    // animation1.classList.add("animation")
    // container.appendChild("animation1")
  }
}

let playerScore = localStorage.getItem("playerScore") ? parseInt(localStorage.getItem("playerScore")) : 0;
let computerScore = localStorage.getItem("computerScore") ? parseInt(localStorage.getItem("computerScore")) : 0;

// Update the UI with stored scores
yourScore.textContent = playerScore;
comScore.textContent = computerScore;

function resetGameScreen() {
  // Hide elements
  images.style.display = "none";
  win.style.display = "none";
  line.style.display = "block"
  computerResult.style.display = "none";
  loading.style.display = "none";
  winLoss.textContent = "";
  play.style.display = "none"
  next.style.display = "none"


  paper.classList.remove("animation1");
  rock.classList.remove("animation1");
  scissor.classList.remove("animation1");


  // Enable player choices again
  all.forEach(button => {
      button.style.pointerEvents = "auto";
      button.style.zIndex = "1";
  });

  // Clear timeouts
  clearTimeout(win1);
  clearTimeout(win2);
  clearTimeout(win3);
}




for (let i = 0; i < all.length; i++) {
  

  all[i].addEventListener("click", () => {
    // resetGameScreen()
    const playerChoice = data[i];
    const random = Math.floor(Math.random() * imgValue.length);
    let img = (images.src = imgValue[random]);
    

    all[i].style.zIndex = "3";
    all[i].style.pointerEvents = "none";
    paper.classList.add("animation1");
    rock.classList.add("animation1");
    scissor.classList.add("animation1");
    line.style.display = "none";
     win1 = setInterval(function () {
      computerResult.style.display = "block";
    }, 1000);

    win2 = setInterval(function () {
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

     win3 = setInterval(function () {
      images.style.display = "block";
    }, 3500);

    // if (playerChoice === computerChoice) {
    //     return "It's a tie!";
    // }

    setTimeout(() => {
      getWinner(playerChoice, img);

      // Clear intervals after result is shown
      clearTimeout(win1);
      clearTimeout(win2);
      clearTimeout(win3);
      play.style.display = "block"
      next.style.display = "block"

  }, 3500);
  console.log(playerScore)
  console.log(computerScore)

  });
}
play.addEventListener("click",resetGameScreen);
next.addEventListener("click", () => {
  localStorage.clear();
  playerScore = 0;
  computerScore = 0;
  yourScore.textContent = playerScore;
  comScore.textContent = computerScore;
  resetGameScreen();
});
