var startButtonEl = document.querySelector('#start-button');
var challengeAndQuestionTitleEl = document.querySelector('#cnq-title');
var infoAndTimerEl = document.querySelector('#info-and-timer');
var scoreEl = document.querySelector('#current-score');
var answerOne = document.querySelector('#answer-1');
var answerTwo = document.querySelector('#answer-2');
var answerThree = document.querySelector('#answer-3');
var answerFour = document.querySelector('#answer-4');

var score = 0;
var questionNumber;
var secondsLeft;

function timesUp() {
    infoAndTimerEl.textContent = "";
    challengeAndQuestionTitleEl.textContent = "Time's Up!";
    startButtonEl.setAttribute("style", "display:block");
};

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      infoAndTimerEl.textContent = secondsLeft + " seconds left...";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timesUp();
      }
    }, 1000)};

function questionOne() {
    challengeAndQuestionTitleEl.textContent = "What file type do javascript files come in?";
    answerOne.textContent = ".java";
    answerTwo.textContent = ".javascript";
    answerThree.textContent = ".jscript";
    answerFour.textContent = ".js";
};

function gameStart() {
    console.log("Game Started!");
    infoAndTimerEl.textContent = "60 seconds left...";
    questionNumber = 1;
    scoreEl.textContent = "Score: " + score;
    challengeAndQuestionTitleEl.textContent = "How many";
    secondsLeft = 60;
    setTime();
    questionOne();
    startButtonEl.setAttribute("style", "display:none");
};

function answerOneClicked() {

};

function answerTwoClicked() {

};

function answerThreeClicked() {

};

function answerFourClicked() {

};

startButtonEl.addEventListener('click', gameStart);
answerOne.addEventListener('click', answerOneClicked);
answerTwo.addEventListener('click', answerTwoClicked);
answerThree.addEventListener('click', answerThreeClicked);
answerFour.addEventListener('click', answerFourClicked);