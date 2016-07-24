// Names of Players Stored

var player1Name = "Terrence";
var player2Name = "James";

// Keep Count of Player Wins 

var player1Wins = 0;
var player2Wins = 0;

// Set Total Number of Games Needed to Win Series

var totalWins = 3;

// Choices Array

var weapons = ['rock' , 'paper', 'scissors'];


// Working If Statement 
  
  while ( player1Wins <= totalWins && player2Wins <= totalWins){
    var player1Hand = weapons[parseInt(Math.random()*weapons.length) %3];
    var player2Hand = weapons[parseInt(Math.random()*weapons.length) %3];

// Ran when "playerWins" is equal to totalWins
      if (player1Wins === totalWins){
  console.log(player1Name + " has defeated " + player2Name + ", " + player1Wins + " to " + player2Wins + "!" );
        break;
}
else if (player2Wins === totalWins){
  console.log(player2Name + " has defeated " + player1Name + ", " + player2Wins + " to " + player1Wins + "!" );
    break;
}

// Player Picks Printed
    console.log(player1Name + " picks " + player1Hand);
    console.log(player2Name + " picks " + player2Hand);
  
// Game Conditions

 if (weapons.indexOf(player1Hand) === weapons.indexOf(player2Hand)){
    console.log("We have a tie! Play again.");
  }
  else if (player1Hand === 'rock' && player2Hand != 'paper'){
    console.log(player1Name + " wins!");
    player1Wins ++;
  } 
  else if (player1Hand === 'paper' && player2Hand != 'scissors'){
    console.log(player1Name + " wins!");
    player1Wins ++;
  } 
  else if (player1Hand === 'scissors' && player2Hand != 'rock' ){
    console.log(player1Name + " wins!");
    player1Wins ++;
  } else {
    console.log(player2Name + " wins!")
    player2Wins ++;
  }
}
