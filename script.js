var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function hitVal() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (i = 1; i <= 136; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
  var clickNum = Number(details.target.textContent);
  if (clickNum === hitrn) {
    increaseScore();
    makeBubble();
    hitVal();
  }
});

runTimer();
makeBubble();
hitVal();
// increaseScore();
