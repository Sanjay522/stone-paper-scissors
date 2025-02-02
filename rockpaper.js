const container = document.getElementById("container")
const imagePath = ["rock-paper-scissors-296853_640.png",
    "rock-paper-scissors-296854_640.png",
    "rock-paper-scissors-296855_640.png"]
const images = document.createElement("img")
const random = Math.floor(Math.random()*imagePath.length)
images.src = imagePath[random]
images.style.height= "50px"
images.style.width= "50px"
images.style.border = "5px solid blue"
images.style.borderRadius = "50%"
container.appendChild(images)
