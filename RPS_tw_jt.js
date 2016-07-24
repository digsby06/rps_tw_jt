// Ask Names of Players

var player1Name = "Terrence";
var player2Name = "James";

// Keep Count of Player Wins 

var player1Wins = 0
var player2Wins = 0

// Total Wins Counter

var totalWins = 0;

// Choices Array

var weapons = ['rock' , 'paper', 'scissors'];

// Player Hands 


while ( player1Wins <= 3 || player2Wins <= 3)  {

var player1Hand = weapons[parseInt(Math.random()*weapons.length) %3];
var player2Hand = weapons[parseInt(Math.random()*weapons.length) %3];

// Player Picks Printed

  // console.log(player1Hand);
  // console.log(player2Hand);


  console.log(player1Name + ' chose ' + player1Hand + ' and ' + player2Name + ' chose ' + player2Hand);

  switch (player1Hand) {
    case 'rock':
      if (player2Hand === 'rock') {
        console.log('tie');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      } else if (player2Hand === 'paper'){
        player2Wins +=1;
        console.log(player2Name + ' wins!');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      } else  if (player2Hand === 'scissors'){
        player1Wins +=1;
        console.log(player1Name + ' wins!');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      }
      break;
    case 'paper':
       if (player2Hand === 'rock') {
        player1Wins +=1;
        console.log(player1Name + ' wins!');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player1Name + ' # of wins: ' + player2Wins);
      } else if (player2Hand === 'paper'){
        console.log('tie');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      } else  if (player2Hand === 'scissors'){
        player2Wins +=1;
        console.log(player2Name + ' wins!');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      }
      break;
    case 'scissors':
      if (player2Hand === 'rock') {
        player2Wins +=1;
        console.log(player2Name + ' wins!');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      } else if (player2Hand === 'paper'){
        player1Wins +=1;
        console.log(player1Name + ' wins!');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      } else  if (player2Hand === 'scissors'){
        console.log('tie');
        console.log(player1Name + ' # of wins: ' + player1Wins + '. '  + player2Name + ' # of wins: ' + player2Wins);
      }
      break;

  }


}

// Working If Statement 
  
  // if (weapons.indexOf(player1Hand) === weapons.indexOf(player2Hand)){
  //   console.log("We have a tie! Play again.");
  // }
  // else if (player1Hand === 'rock' && player2Hand != 'paper'){
  //   console.log(player1Name + " wins!");
  // } 
  // else if (player1Hand === 'paper' && player2Hand != 'scissors'){
  //   console.log(player1Name + " wins!");
  // } 
  // else if (player1Hand === 'scissors' && player2Hand != 'rock' ){
  //   console.log(player1Name + " wins!");
  // } else {
  //   console.log(player2Name + " wins!")
  // }

