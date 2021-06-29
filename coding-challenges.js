//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.
function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
  }
  function getAverage(marks){
    let sum = 0;
    marks.forEach(function (mark) {
      sum += mark
    })
    return Math.round(sum / marks.length)
  }
  // getAverage([2, 2, 2, 2]);
  // getAverage([1,2,3,4,5]);
  // getAverage([1,1,1,1,1,1,1,2]);


  //////////////////////

  // While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
// The function receives one parameter health which will always be a whole number between -10 and 10.
function checkAlive (health) {
    if (health <= 0) {
      return false;
    } else {
      return true;
    }
  }