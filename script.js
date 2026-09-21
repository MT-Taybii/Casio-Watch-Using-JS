const myHours = document.getElementById("myHours");
const myMinutes = document.getElementById("myMinutes");
const mySeconds = document.getElementById("mySeconds");

const mySubmit = document.getElementById("mySubmit");

const myOutput = document.getElementById("myOutput");

let timer;

mySubmit.onclick = function () {
  let totalSeconds =
    Number(myHours.value) * 3600 +
    Number(myMinutes.value) * 60 +
    Number(mySeconds.value);

  clearInterval(timer);

  function updateClock() {

    totalSeconds = totalSeconds % 86400;

    let hours = Math.floor(totalSeconds / 3600);

    let remainingSeconds = totalSeconds % 3600;

    let minutes = Math.floor(remainingSeconds / 60);

    let seconds = remainingSeconds % 60;

    myOutput.textContent =
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`;

    totalSeconds++;
  }
  updateClock();

  timer = setInterval(updateClock, 1000);
};
