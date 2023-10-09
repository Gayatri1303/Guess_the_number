"use script";

let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "oops!enter number";
  } else if (guess == secretnum) {
    document.querySelector(".message").textContent = "correct!!!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (score > 1) {
    if (guess < secretnum) {
      document.querySelector(".message").textContent = "lower value";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess > secretnum) {
      document.querySelector(".message").textContent = "higher value";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "you lost!";
    document.querySelector(".number").textContent = "  ";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#50534f";
});
