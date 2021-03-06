//jshint esversion:9

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
let container=  document.querySelector('#container');

function showAppreciation() {
  container.style.visibility = 'visible';
}
function hideAppreciation() {
  container.style.visibility = 'hidden';
}

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    hideAppreciation();
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
    hideAppreciation();
  },
  onComplete() {
    console.log("Timer is completed");
    showAppreciation();
  },
});
// timer.start();
