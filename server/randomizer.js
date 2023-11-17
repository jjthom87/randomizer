/*
    There needs to be:
      1. an interval
      2. total number of records
      3. where it's at in the randomizer
      4. if nothing left, then randomizer over, ask if they want to start over?
      5. scheduler to check all randomizer
      6. authentication
      7. Store randomizer settings in database
      8. how the user wants to be notified
      9. ability to cancel the randomizer at any time
      10. A record of the randomizer?
      11. import csv? what other sort of data inpurt is supported?
      12. when dou want it to start?
*/

interval = setInterval(function(){
  if(randomStuffFromCsv.length > 0){
    randomNumberFromArray = Math.floor(Math.random() * randomStuffFromCsv.length)
    console.log(randomStuffFromCsv[randomNumberFromArray]);
    randomStuffFromCsv.splice(randomNumberFromArray, 1);
  } else {
    console.log("Array is Empty")
    clearInterval(interval)
  }
}, intervalNumber);
