// Business logic

function parseOneOrZero(numToParse) {
  var parseArray = numToParse.split("");

  for (var digit = 0; digit < parseArray.length; digit++) {
    var soloDigit = parseInt(parseArray[digit]);
    if (soloDigit === 1) {
      return 1;
    } else if (soloDigit === 0) {
      return 0;
    }
  }
}


function numberConverter(numToConvert) {

  var computerResponse = ["Beep","Boop","I'm sorry, Dave. I'm afraid I can't do that."]

  if (numToConvert > 0 && numToConvert%3 === 0) {
    return computerResponse[2]

  } else if (numToConvert === 1) {
    return computerResponse[1]

  } else if (numToConvert === 0) {
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

    var array = [];
    // console.log(array = numberToComputerArray(10));

    console.log(parseOneOrZero("12"));



    // var trojanHorse = $("#romans").val();
    //
    // $(".error-message").hide();
    // if (parseInt(trojanHorse) >= 4000) {
    //   $("#tooBig").show();
    // } else if (parseInt(trojanHorse) < 0) {
    //   $("#tooLittle").show();
    // } else if (!parseInt(trojanHorse)) {
    //   $("#justWrong").show();
    // } else {
    //   $(".charriot").slideDown(5000);
    //   $("#roman-numeral").text(numberToComputerArray(trojanHorse)).show();
    // }


  })

    // console.log()
});
