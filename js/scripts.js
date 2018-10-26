// Business logic

function columnBuilder(numberIndex, num) {

  var altNumerals = ["I","V","X","L","C","D","M"]
  var column = numberIndex*2;

  if (num === 1) {
    return altNumerals[column];
  } else if (num === 2) {
    return altNumerals[column] + altNumerals [column];
  } else if (num === 3) {
    return altNumerals[column] + altNumerals[column] + altNumerals[column];
  } else if (num === 4) {
    return altNumerals[column] + altNumerals [column + 1];
  } else if (num === 5) {
    return altNumerals[column + 1];
  } else if (num === 6) {
    return altNumerals[column + 1] + altNumerals [column];
  } else if (num === 7) {
    return altNumerals[column + 1] + altNumerals [column] + altNumerals [column];
  } else if (num === 8) {
    return altNumerals[column + 1] + altNumerals[column] + altNumerals[column] + altNumerals[column];
  } else if (num === 9) {
    return altNumerals[column] + altNumerals [column + 2];
  }
}

function numberColumnParser(numberString) {

  var reversedNumberArray = numberString.split("").reverse();
  var results= [];

  reversedNumberArray.forEach(function(numberToParse,i) {
    results.push(columnBuilder(i,parseInt(numberToParse)))

  })
  return results.reverse().join('').toString()
}





// UI logic

$(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var trojanHorse = $("#romans").val();

    $(".error-message").hide();
    if (parseInt(trojanHorse) >= 4000) {
      $("#tooBig").show();
    } else if (parseInt(trojanHorse) < 0) {
      $("#tooLittle").show();
    } else if (!parseInt(trojanHorse)) {
      $("#justWrong").show();
    } else {
      $(".charriot").slideDown(5000);
      $("#roman-numeral").text(numberColumnParser(trojanHorse)).show();

    }
  })

    // console.log()
});
