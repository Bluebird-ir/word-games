const userpick = (process.argv[2]).toLowerCase();


if (userpick !== 'paper' && userpick !== 'rock' && userpick !== 'scissors') {
    console.log('ERROR - The user should pick one of the following: rock, paper, scissors');
    return;
}

console.log('You picked the ' + userpick);

let computerpick;

const randomNumber = Math.random();

if (randomNumber <= 1 / 3) {
    computerpick = "rock"
} else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerpick = "paper"
} else {
    computerpick = "scissors"
}

console.log('Computer picked the ' + computerpick);

if (computerpick === userpick) {
    console.log('Result: Tie');
} else if (userpick === 'rock' && computerpick === 'scissors') {
    console.log('Result: You won!');
} else if (userpick === 'rock' && computerpick === 'paper') {
    console.log('Result: Computer won!');
} else if (userpick === 'paper' && computerpick === 'scissors') {
    console.log('Result: Computer won!');
} else if (userpick === 'paper' && computerpick === 'rock') {
    console.log('Result: You won!');
} else if (userpick === 'scissors' && computerpick === 'rock') {
    console.log('Result: Computer won!');
} else if (userpick === 'scissors' && computerpick === 'paper') {
    console.log('Result: You won!');
}