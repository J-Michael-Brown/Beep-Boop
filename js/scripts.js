// Business logic

function numberConverter(num) {

  var computerResponse = ["Beep","Boop","I'm sorry, Dave. I'm afraid I can't do that."]

  if (num > 0 && num%3 === 0) {
    return computerResponse[2]
  } else if (num === 1) {
    return computerResponse[1]
  } else if (num === 0) {
    return computerResponse[0];
  } else {
    return num;
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
    console.log(array = numberToComputerArray(10));
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
