// Ask Names of Players

var player1Name = prompt("What is your name?");
var player2Name = prompt("What is your name?");

// Keep Count of Player Wins 

var player1Wins = 0
var player2Wins = 0

// Total Wins Counter

var totalWins = 0;

// Choices Array

var weapons = ['rock' , 'paper', 'scissors'];

// Player Hands 

var player1Hand = weapons[parseInt(Math.random()*weapons.length) %3];
var player2Hand = weapons[parseInt(Math.random()*weapons.length) %3];

// Player Picks Printed

  console.log(player1Hand);
  console.log(player2Hand);

// Working If Statement 
  
  if (weapons.indexOf(player1Hand) === weapons.indexOf(player2Hand)){
    console.log("We have a tie! Play again.");
  }
  else if (player1Hand === 'rock' && player2Hand != 'paper'){
    console.log(player1Name + " wins!");
  } 
  else if (player1Hand === 'paper' && player2Hand != 'scissors'){
    console.log(player1Name + " wins!");
  } 
  else if (player1Hand === 'scissors' && player2Hand != 'rock' ){
    console.log(player1Name + " wins!");
  } else {
    console.log(player2Name + " wins!")
  }