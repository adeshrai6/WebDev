const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    container.className = "container shrink";
    setTimeout(() => {
      text.innerText = "Breathe Out!";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
