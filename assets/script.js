var startButtonEl = document.querySelector('#start-button');
var challengeAndQuestionTitleEl = document.querySelector('#cnq-title');
var infoAndTimerEl = document.querySelector('#info-and-timer');
var scoreEl = document.querySelector('#current-score');
var saveScoreEl = document.querySelector('#save-score-button');
var answerOne = document.querySelector('#answer-1');
var answerTwo = document.querySelector('#answer-2');
var answerThree = document.querySelector('#answer-3');
var answerFour = document.querySelector('#answer-4');
var inputField = document.querySelector('#input-text');
var inputText = document.querySelector('#input-text').value;

var score = 0;
var questionNumber;
var secondsLeft;
var answerNumber;
var gameActive;
var highScore;

function saveScore() {
    console.log(inputText);
    // highScore = inputText;
    console.log(highScore);
    console.log(inputField);
    console.log(inputText);
};

function timesUp() {
    infoAndTimerEl.textContent = "";
    challengeAndQuestionTitleEl.textContent = "Time's Up!";
    startButtonEl.setAttribute('style', 'display:block');
    gameActive = false;
    saveScoreEl.setAttribute('style', 'display: inline-block');
    answerOne.textContent = "";
    answerTwo.textContent = "";
    answerThree.textContent = "";
    answerFour.textContent = "";
    inputField.setAttribute('style', 'display: inline-block');
};

function setTime() {
    var timerInterval = setInterval(function() {
    if (gameActive === true) {
        secondsLeft--;
        infoAndTimerEl.textContent = secondsLeft + " seconds left...";
        if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timesUp();
      }} else {
        clearInterval(timerInterval);
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
    }}   else if (questionNumber === 2) {
            if (answerNumber === 3) {
            score = score + 100;
            scoreEl.textContent = "Score: " + score;
            questionNumber = 3;
            scoreEl.setAttribute('style', 'color:green');
            questionThree();
            } else {
            secondsLeft = secondsLeft - 10;
            infoAndTimerEl.textContent = secondsLeft + " seconds left...";
            questionNumber = 3;
            scoreEl.setAttribute('style', 'color:red');
            questionThree();
    }}  else if (questionNumber === 3) {
            if (answerNumber === 1) {
             score = score + 100;
            scoreEl.textContent = "Score: " + score;
            questionNumber = 4;
            scoreEl.setAttribute('style', 'color:green');
            questionFour();
            } else {
            secondsLeft = secondsLeft - 10;
            infoAndTimerEl.textContent = secondsLeft + " seconds left...";
            questionNumber = 4;
            scoreEl.setAttribute('style', 'color:red');
            questionFour();
    }}  else if (questionNumber === 4) {
            if (answerNumber === 3) {
             score = score + 100;
            scoreEl.textContent = "Score: " + score;
            questionNumber = 5;
            scoreEl.setAttribute('style', 'color:green');
            questionFive();
            } else {
            secondsLeft = secondsLeft - 10;
            infoAndTimerEl.textContent = secondsLeft + " seconds left...";
            questionNumber = 5;
            scoreEl.setAttribute('style', 'color:red');
            quizComplete();
    }}  else if (questionNumber === 5) {
            if (answerNumber === 3) {
            score = score + 100;
            scoreEl.textContent = "Score: " + score;
            questionNumber = 5;
            scoreEl.setAttribute('style', 'color:green');
            quizComplete();
            } else {
            secondsLeft = secondsLeft - 10;
            infoAndTimerEl.textContent = secondsLeft + " seconds left...";
            questionNumber = 5;
            scoreEl.setAttribute('style', 'color:red');
            quizComplete();
}}}};

function quizComplete() {
    infoAndTimerEl.textContent = "";
    challengeAndQuestionTitleEl.textContent = "Good job! You earned a score of " + score + "!";
    startButtonEl.setAttribute('style', 'display:block');
    gameActive = false;
    saveScoreEl.setAttribute('style', 'display: inline-block')
    answerOne.textContent = ""
    answerTwo.textContent = ""
    answerThree.textContent = ""
    answerFour.textContent = ""
    inputField.setAttribute('style', 'display: inline-block');
};

function questionFive() {
    challengeAndQuestionTitleEl.textContent = "How do you change css properties in Javascript with the .setAttribute() function?";
    answerOne.textContent = "'css'"
    answerTwo.textContent = "'element'"
    answerThree.textContent = "'style'"
    answerFour.textContent = "'attribute'"
};

function questionFour() {
    challengeAndQuestionTitleEl.textContent = "Which of the following is used to denote an id in css?";
    answerOne.textContent = "."
    answerTwo.textContent = "*"
    answerThree.textContent = "#"
    answerFour.textContent = ":"
};

function questionThree() {
    challengeAndQuestionTitleEl.textContent = "What is the correct syntax for linking a .css file to your .html file?";
    answerOne.textContent = "<link rel='stylesheet' ref='text/css' href='./assets/style.css'/>"
    answerTwo.textContent = "<link rel='stylesheet' ref='text/css' src='./assets/style.css'/>"
    answerThree.textContent = "<script rel='stylesheet' ref='text/css' href='./assets/style.css'/>"
    answerFour.textContent = "<script rel='stylesheet' ref='text/css' src='./assets/style.css'/>"
};

function questionTwo() {
    challengeAndQuestionTitleEl.textContent = "Which file type is used to provide styling to webpages?";
    answerOne.textContent = ".html"
    answerTwo.textContent = ".jquery"
    answerThree.textContent = ".css"
    answerFour.textContent = ".doc"
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
    inputField.setAttribute('style', 'display: none');
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

saveScoreEl.addEventListener('click', saveScore);
startButtonEl.addEventListener('click', gameStart);
answerOne.addEventListener('click', answerOneClicked);
answerTwo.addEventListener('click', answerTwoClicked);
answerThree.addEventListener('click', answerThreeClicked);
answerFour.addEventListener('click', answerFourClicked);