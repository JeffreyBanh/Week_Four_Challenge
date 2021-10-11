const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScores.map(getFull);

function getFull(item){
    return (x = [item.name, item.score].join(" - "))
}

highScoresList.innerHTML = x

/*
highScoresList.innerHTML = highScores.map(score => {
    return '${score.name} - ${score.score}';
})
*/