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



function numberConverter(numToConvert, userName) {

  // debugger;
  var dave = "Dave";
  if (userName) {
    dave = userName;
  }
  var computerResponse = ['"Beep!"','"Boop!"',('"I\'m sorry, ' + dave + '. I\'m afraid I can\'t do that."')]

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

function numberToComputerArray(numberString, userName) {

  var number = parseInt(numberString);
  var results= [];

  for (var i = 0; i <= number; i++) {
    results.push(numberConverter(i, userName));

  }
  return results;
}

function numberToComputerArrayReverse(numberString, userName) {

  var number = parseInt(numberString);
  var results= [];

  for (var i = 0; i <= number; i++) {
    results.unshift(numberConverter(i, userName));

  }
  return results;
}



// UI logic

function cleanArray(messyArray) {
  var cleanString = messyArray.join("$ ");
  var cleanedArray = [];
  cleanedArray = cleanString.split("$")
  return cleanedArray;
}

function detectShutdown(loginName) {
  var shutDownCommand  = ["log off", "log out", "logout", "shutdown", "off", "logoff", "quite", "q", "open pod bay doors", "open the pod bay doors", "exit"];


  for (var i = 0; i < shutDownCommand.length; i++) {
    if (loginName === shutDownCommand[i]) {
      return true;
    }
  }
}

$(function() {

  var sorryName = "Dave";

  $("#form-name").submit(function(event) {

    var nameCheck = $("#user-name").val();
    if (!nameCheck) {
      sorryName = "Dave";
    } else if (detectShutdown(nameCheck)) {
      sorryName = nameCheck;
      $("img").addClass("low-opacity");
      $("#greetings").hide();
      sorryName = "Dave";

    } else {
      sorryName = nameCheck;
      $("#hal").removeClass();
      $("#greetings").text("Hello, " + sorryName + ".").show();
    }

    event.preventDefault();

  });

  $("#LtoG").click(function(event) {


    var arrayOutput = [];
    var userInput = $("#user-number").val();
    var userInputInterger = parseInt(userInput);
    var finalOutputOfArray = numberConverter(userInput, sorryName);
    arrayOutput = numberToComputerArray(userInput, sorryName);

    $(".message").hide();
    $("form").toggle();
    $("#do-it-again").toggle();

    if (!userInputInterger) {
      $("#justWrong").show();
    } else if (userInputInterger < 0) {
      $("#tooLittle").show();
    } else {


      $("#number-array").text(cleanArray(arrayOutput)).slideToggle(10*(arrayOutput.length));

    }

    event.preventDefault();
  })
  $("#GtoL").click(function(event) {
    event.preventDefault();

    var arrayOutput = [];
    var userInput = $("#user-number").val();
    var userInputInterger = parseInt(userInput);
    var finalOutputOfArray = numberConverter(userInput, sorryName);
    arrayOutput = numberToComputerArrayReverse(userInput, sorryName);

    $(".message").hide();
    $("form").toggle();
    $("#do-it-again").toggle();

    // if (userInputInterger === 1) {
    //   $("#hal").removeClass();
    // } else if (userInputInterger === 0) {
    //   $(".results#hal").addClass(".low-opacity");
    // }
    if (!userInputInterger) {
      $("#justWrong").show();
    } else if (userInputInterger < 0) {
      $("#tooLittle").show();
    } else {
      $("#number-array").text(cleanArray(arrayOutput)).slideToggle(10*(arrayOutput.length));
    }

  });

  $("#do-it-again").click(function(event) {
    $("form").toggle();
    $("#do-it-again").toggle();
  });

});
