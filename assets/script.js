var startButtonEl = document.querySelector('#start-button');
var challengeAndQuestionTitleEl = document.querySelector('#cnq-title');
var infoAndTimerEl = document.querySelector('#info-and-timer');
var scoreEl = document.querySelector('#current-score');
var saveScoreEl = document.querySelector('#save-score-button');
var answerOne = document.querySelector('#answer-1');
var answerTwo = document.querySelector('#answer-2');
var answerThree = document.querySelector('#answer-3');
var answerFour = document.querySelector('#answer-4');

var score = 0;
var questionNumber;
var secondsLeft;
var answerNumber;
var gameActive;

function timesUp() {
    infoAndTimerEl.textContent = "";
    challengeAndQuestionTitleEl.textContent = "Time's Up!";
    startButtonEl.setAttribute('style', 'display:block');
    gameActive = false;
    saveScoreEl.setAttribute('style', 'display: inline-block')
};

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      infoAndTimerEl.textContent = secondsLeft + " seconds left...";
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timesUp();
      }
    }, 1000)};

function answerChecker() {
    if (gameActive === true) {
        if (questionNumber === 1) {
            if (answerNumber === 4) {
            score = score + 100;
            scoreEl.textContent = "Score: " + score;
            questionNumber = 2;
            scoreEl.setAttribute('style', 'color:green');
            questionTwo();
            } else {
            secondsLeft = secondsLeft - 10;
            infoAndTimerEl.textContent = secondsLeft + " seconds left...";
            questionNumber = 2;
            scoreEl.setAttribute('style', 'color:red');
            questionTwo();
        };
    }   if (questionNumber === 2) {

    }
};};

function questionTwo() {
    challengeAndQuestionTitleEl.textContent = "Which file type is used to provide styling to webpages?";
};

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
    gameActive = true;
    scoreEl.textContent = "Score: " + score;
    challengeAndQuestionTitleEl.textContent = "How many";
    secondsLeft = 60;
    score = 0;
    scoreEl.textContent = "Score: " + 0;
    setTime();
    saveScoreEl.setAttribute('style', 'display: none');
    questionOne();
    startButtonEl.setAttribute("style", "display:none");
};

function answerOneClicked() {
    answerNumber = 1;
    answerChecker();
};

function answerTwoClicked() {
    answerNumber = 2;
    answerChecker();
};

function answerThreeClicked() {
    answerNumber = 3;
    answerChecker();
};

function answerFourClicked() {
    answerNumber = 4;
    answerChecker();
};

startButtonEl.addEventListener('click', gameStart);
answerOne.addEventListener('click', answerOneClicked);
answerTwo.addEventListener('click', answerTwoClicked);
answerThree.addEventListener('click', answerThreeClicked);
answerFour.addEventListener('click', answerFourClicked);