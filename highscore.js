const username = document.querySelector('#username')
const saveScore = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScore = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORE = 5

finalScore.innerText = mostRecentScore
username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value
})

saveHighScore = event => {
    event.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score)

    highScore.sort((a,b) => {
        return b.score - a.scoore
    })

    highScore.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScore))
    window.location.assign('/')
}