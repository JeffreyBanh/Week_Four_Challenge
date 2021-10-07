const question = document.querySelector ('#question');
const choice = Array,from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector ('#progressText');
const scoreText = document.querySelector ('#score');
const progressBarFull = document.querySelector ('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCOunter = 0;
let availableQuestion = {};

let questions = [
    {
        question: "What is 2 + 2?",
        choice1: '2';
        choice2: '2';
        choice3: '2';
        choice4: '2';
        answer: 2
    }
]