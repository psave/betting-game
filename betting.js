$(document).ready(function(){

  var startingFunds = 20;
  var currentFunds = startingFunds;
  $('form').submit(function(event) {

    var maxBet = 10.00;
    var minBet = 5.00;

    var betAmount = $('#betAmount').val();
    var guessNumber = $('#guessNumber').val();
    var randomNumber = Math.floor((Math.random() * 10) + 1);

      if (guessNumber == randomNumber) {
        currentFunds += Number(betAmount);
      } else if (guessNumber == randomNumber + 1 || guessNumber == randomNumber - 1) {
        currentFunds = currentFunds;
      } else {
        currentFunds -= Number(betAmount);
      }

    $('#funds-remaining').text(currentFunds);
    $('#random-number').text(randomNumber);
    // document.getElementById('funds-remaining').innerHTML = currentFunds;

    if(event) {
      event.preventDefault();
    }

  });

});




// var startingFunds = 20;
// var maxBet = 10.00;
// var minBet = 5.00;
// var currentFunds = startingFunds;



// Allows player to start new game!
// function startProgram()
// {
//   betting();
// }



// var betting = function() {
//   while (currentFunds >= minBet) {
//     var randomNumber = Math.floor((Math.random() * 10) + 1);
//     var betAmount = prompt("You can bet between $" + minBet + " and $" + maxBet + ". Enter the amount you would like to bet: ");
//     var guessNumber = prompt("Guess a number between 1 and 10: ");

//     if (guessNumber == randomNumber) {
//       currentFunds += betAmount;
//       alert("You guessed the random number of: " + randomNumber + ". You just won: $" + betAmount + ". You now have: $" + currentFunds);
//     } else if (guessNumber == randomNumber + 1 || guessNumber == randomNumber - 1) {
//       currentFunds = currentFunds
//       alert("The random number was " + randomNumber + ". You did not win or lose anythign and still have: " + currentFunds);
//     } else {
//       currentFunds -= betAmount;
//       alert("The random number was " + randomNumber + ". You just lost: $" + betAmount + ". You now have: $" + currentFunds);
//     };

//   };
//   //The game ends because we don't have sufficient funds.
//   alert("You only have $" + currentFunds + " left." + "The minimum bet is $" + minBet);
//   currentFunds = startingFunds;
// };

// betting();

