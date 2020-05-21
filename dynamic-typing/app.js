const wording = ["Do you like JavaScript as much as I do?", "Hope you are having fun this is a simple game you can make.", "Source code is included so you can create your own version of this challenge."];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this.innerText);
  if (this.innerText == "Start") {
    playText.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    playText.disabled = true;
    button.innerText = "Start";
  }
})

function playGame() {
  let randomNum = Math.floor(Math.random() * wording.length);
  message.innerText = wording[randomNum];
  let date = new Date();
  startTime = date.getTime();
  console.log(startTime);
  button.innerText = "Done";
  console.log(randomNum);
}
