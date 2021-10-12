const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector ('#score');
const timerEl = document.getElementById('timer')

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];
var timeLeft = 60;

let questions = [
    {
        question: 'How much of the planet oxygen is produced by the ocean?',
        choice1: 'less than 50%',
        choice2: '50% to 60%',
        choice3: '70% to 80%',
        choice4: 'over 80%',
        answer: 3,
    },

    {
        question: 'How much does the U.S lies beneath the ocean?',
        choice1: '50%',
        choice2: '60%',
        choice3: '30%',
        choice4: '20%',
        answer: 1,
    },

    {
        question: 'Which of these are the largest ocean in the world?',
        choice1: 'Indian Ocean',
        choice2: 'Pacific Ocean',
        choice3: 'Atlantic Ocean',
        choice4: 'Artic Ocean',
        answer: 2,
    },

    {
        question: 'What is the fastest fish in the ocean?',
        choice1: 'Bonita',
        choice2: 'Wahoo',
        choice3: 'Sail Fish',
        choice4: 'Sword Fish',
        answer: 3,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

function startGame() {
    score = 0
    availableQuestions = [...questions]
    newQuestions()
}

function countdown() {
    

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
        } 
        else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        return window.location.assign('/highscore.html')
        }
    }, 1000);
    }

function newQuestions(){
    if (availableQuestions.length === 0){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/highscore.html')
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions[questionIndex]
    question.innerHTML = currentQuestions.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestions['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)
    
}

startGame()
countdown()

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        const selectedChoice = event.target
        const selectedAnswer = selectedChoice.dataset['number']
        let applyClass = selectedAnswer == currentQuestions.answer ? 'correct' : 'incorrect'

        if (applyClass === 'correct'){
            incrementalScore(SCORE_POINTS)
        }
        else{
            timeLeft = timeLeft - 10
        }

        selectedChoice.parentElement.classList.add(applyClass)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(applyClass)
            newQuestions()
        }, 1000)
    })
})

function incrementalScore(num){
    score += num
    scoreText.innerText = score
}

