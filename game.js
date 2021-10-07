const question = document.querySelector ('#question');
const choice = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector ('#progressText');
const scoreText = document.querySelector ('#score');
const progressBarFull = document.querySelector ('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCOunter = 0;
let availableQuestion = [];

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '2',
        choice3: '2',
        choice4: '2',
        answer: 2,
    },

    {
        question: 'What is 2 + 3?',
        choice1: '2',
        choice2: '2',
        choice3: '2',
        choice4: '2',
        answer: 2,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

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

startgame()