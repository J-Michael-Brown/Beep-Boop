// Business logic

function parseOneOrZero(numToParse) {
  var stringNum = numToParse.toString();
  var parseArray = [];
  var parseArray = stringNum.split("");

  for (var digit = 0; digit < parseArray.length; digit++) {
    var soloDigit = parseInt(parseArray[digit]);
    if (soloDigit === 1) {
      return 1;
    }
  }

  for (var digit = 0; digit < parseArray.length; digit++) {
    var soloDigit = parseInt(parseArray[digit]);
    if (soloDigit === 0) {
      return 0;
    }
  }

}


function numberConverter(numToConvert) {

  var computerResponse = ['Beep!','Boop!','I\'m sorry, Dave. I\'m afraid I can\'t do that.']

  if (numToConvert > 0 && numToConvert%3 === 0) {
    return computerResponse[2]

  } else if (parseOneOrZero(numToConvert) === 1) {
    return computerResponse[1]

  } else if (parseOneOrZero(numToConvert) === 0) {
    return computerResponse[0];

  } else {
    return numToConvert;
  }
}

function numberToComputerArray(numberString) {

  var number = parseInt(numberString);
  var results= [];

  for (var i = 0; i <= number; i++) {
    results.push(numberConverter(i));

  }
  return results;
}





// UI logic

$(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var arrayOutput = [];
    var userInput = $("#romans").val();
    var userInputInterger = parseInt(userInput);
    var finalOutputOfArray = numberConverter(userInput);
    arrayOutput = numberToComputerArray(userInput);

    $(".message").hide();

    if (!userInputInterger) {
      $("#justWrong").show();
    } else if (userInputInterger < 0) {
      $("#tooLittle").show();
    // } else if (userInputInterger) >= 4000) {
    //   $("#tooBig").show();
    } else {
      $("#final-output").text(finalOutputOfArray).show();
      $("#number-array").text(arrayOutput).show();
    }




  })

    // console.log()
});
