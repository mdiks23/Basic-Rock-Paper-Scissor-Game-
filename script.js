let playerMove=;
function playGame(playerMove) {
    const computerMove = pickcomputerMove();
    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Scissors') {
            result = 'Tie';
        } else if (computerMove === 'Rock') {
            result = 'You lose, try later';
        } else {
            result = 'Congrats! You win!';
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose, try later';
        } else {
            result = 'Congrats! You win!';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose, try later';
        } else {
            result = 'Congrats! You win!';
        }
    }

    console.log(result);
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. The result is ${result}`);
}

   function pickcomputerMove(){

    const randomNumber = Math.random();
    let computerMove ='';
  
  if( randomNumber >=0 && randomNumber <1/3 ){
  computerMove='Rock';
  }
  else if( randomNumber >=1/3 && randomNumber <2/3 ){
 computerMove='Paper';
  }
  else{
computerMove='Scissors';
  }
  
  console.log(computerMove);
    return computerMove;
}
