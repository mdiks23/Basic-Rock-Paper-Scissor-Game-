function playGame(playermove){
    const computerMove= pickcomputerMove();
 
 
  let result='';
  if(playerMove==='Scissors'){
  if(computerMove === 'Scissors'){
    result='Tie';
  }else if(computerMove === 'Rock'){
    result='You loose, try later';
  }else{
    result='Congrats! You win! ';
  }
console.log(result);

alert(`You picked Scissors. Computer picked ${computerMove} . The result is ${result}`);
  }
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
