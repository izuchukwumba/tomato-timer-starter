let studyCount = document.getElementById("study-count");
let studyButton = document.getElementById("study-btn");
let breakCount = document.getElementById("break-count");
let breakButton = document.getElementById("break-btn");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");



let studyTime = parseInt(document.getElementById("study-time").innerHTML)

function startTimer(duration) {

    duration = parseInt(duration)

    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
    }, 1000);

    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
    })

}

function updateTimer(minutes, seconds){
document.getElementById("study-time").innerHTML = minutes


}

function study_sessions(){
    studyCount.innerHTML = parseInt(studyCount.innerHTML) + 1
}

function break_sessions(){
    breakCount.innerHTML = parseInt(breakCount.innerHTML) + 1
}

startTimer(studyTime)
