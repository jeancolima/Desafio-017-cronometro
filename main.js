const buttonStartTimer = document.querySelector(".btn-start");
const buttonStopTimer = document.querySelector(".btn-pause");
const buttonResetTimer = document.querySelector(".btn-reset");
let situation = "reseted";
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

buttonStartTimer.addEventListener('click', startTimer);
buttonStopTimer.addEventListener('click', stopTimer);
buttonResetTimer.addEventListener('click', resetTimer);

function startTimer() {
    if (situation === "stopped" || situation === "reseted") {
        timer = setInterval(updateTimer, 1000);
        situation = "started";
    }
}

function stopTimer() {
    clearInterval(timer);
    situation = "stopped";
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    situation = "reseted";
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    } else if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("hours").textContent = padNumber(hours);
    document.getElementById("minutes").textContent = padNumber(minutes);
    document.getElementById("seconds").textContent = padNumber(seconds);
}

function padNumber(number) {
    return (number < 10) ? '0' + number : number;
}