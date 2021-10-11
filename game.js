const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector ('#score');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

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
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '5',
        answer: 4,
    },

    {
        question: 'What is 2 + 2?',
        choice1: '1',
        choice2: '4',
        choice3: '3',
        choice4: '2',
        answer: 2,
    },

    {
        question: 'What is 2 + 3?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '5',
        answer: 4,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

function startGame() {
    score = 0
    availableQuestions = [...questions]

}

function newQuestions(){
    if (availableQuestions.length === 0){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/highscore.html')
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerHTML = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)
    
}

startGame()
newQuestions()

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        const selectedChoice = event.target
        console.log(selectedChoice)
        const selectedAnswer = selectedChoice.dataset['number']
        console.log(selectedAnswer)

        let applyClass = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (applyClass === 'correct'){
            incrementalScore(SCORE_POINTS)
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
/*
function startgame(){
    availableQuestion = [...questions]
    newQuestions()
}

function newQuestions(){

    const questionIndex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion[questionIndex]
    questions.innerHTMl = currentQuestion.questions

    choice.forEach(choice=>{
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice' + number]
})


*/