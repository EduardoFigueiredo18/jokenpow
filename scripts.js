const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const manchineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let manchineScoreNumber = 0



const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = ' Deu empate!'
    } else if (
            (human === 'paper' && machine === 'rock')||
            (human === 'rock' && machine === 'scissors')||
            (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'você ganhou!'
    } else {
        manchineScoreNumber++
        manchineScore.innerHTML = manchineScoreNumber
        result.innerHTML = 'você perdeu para a Alexa '
    }

}