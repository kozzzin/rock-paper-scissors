const players = {
    'you': 0,
    'computer': 0
}

function computerPlay() {
    const choices = ['rock','paper','scissors'];
    const choice = Math.floor((Math.random() * 3));
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection ==  'paper' && computerSelection == 'rock' ||
        playerSelection ==  'rock' && computerSelection == 'scissors'
    ) {
        players['you'] += 1;
        return;
        // return `You win: ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    } else if (playerSelection == computerSelection) {
        return;
        // return `It's a tie. Both have ${playerSelection.toUpperCase()}`;
    }
    players['computer'] += 1;
    // return `You loose: ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
}

function checkWinner() {
    if (players['you'] == 5 || players['computer'] ==  5) {
        if (players['you'] > players['computer']) return 'player';
        return 'computer';
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function(event) {

    const playerButtons = Array.from(document.querySelectorAll('.player-choice'));

    playerButtons.forEach((but) => {
        but.addEventListener('click', function(e) {
            let compChoice = computerPlay();
            let playerChoice = e.target.getAttribute('id');
            showChoice('you',playerChoice);
            showChoice('comp',compChoice);
            playRound(playerChoice,compChoice);
            document.querySelector('#you-score').textContent = players['you'];
            document.querySelector('#computer-score').textContent = players['computer'];
            let winner = checkWinner();
            if (winner) {
                document.querySelector('#game-area').textContent = `${winner} wins`.toUpperCase();
                setTimeout(function(){
                    location.reload();
                }, 7000);
            }
        })
    });

    function showChoice(player, choice) {
        document.querySelector('#' + player).innerHTML = `<img src="./img/${choice}.svg">`;
    }

    document.querySelector('#start-game').addEventListener('click', function(e) {
        document.querySelectorAll('.hidden').forEach(e => e.classList.remove('hidden'));
        this.classList.add('hidden');
    });
});

// function userInput() {
//     let output;
//     // while(true) {
//     //     const input = prompt('Make your choice: ').toLowerCase();
//     //     if  (['rock','paper','scissors'].includes(input)) {
//     //         output = input;
//     //         break;
//     //     } else {
//     //         console.log(`${input} is not proper choice. Valide choices: 'rock','paper','scissors'`);
//     //     }
//     // }
//     return output;
// }

// function playGame(games) {
//     const score = [0,0];
//     for (let i = 0; i < games; i++) {
//         const playerSelection = userInput();
//         const computerSelection = computerPlay();
//         const result = playRound(playerSelection, computerSelection);
//         if (result.search(/win/gm) != -1) {
//             score[0] += 1;
//         } else if (result.search(/tie/gm) != -1) {
//             score[0] += 1;
//             score[1] += 1;
//         } else {
//             score[1] += 1;
//         }
//         console.log(result);
//     }
//     console.log(`GAME SCORE\nYou: ${score[0]} || Computer ${score[1]}`);
// }


// playGame(5);



// const result = playRound(playerSelection, computerSelection);

// console.log(result);


// for (let i = 0; i < 100; i++) {
//     console.log(computerPlay());
// }


// scissors beats paper
// paper beats rock
// rock beats scissors