


var translater = function (inputtedNumber, inputtedName){
  var enumerated = [];
  for (i = 0; i <= inputtedNumber; i++) {
    enumerated.push(i);
  }
  var translatedArray = enumerated.map(function (v) {
    if (v % 3 === 0) {
      return v = "I'm sorry " + inputtedName + ", I'm afraid I can't do that.";
    } else {
      digits = v.toString().split('');
      if (digits.includes('1')) {
        return v = 'Boop!';
      } else if (digits.includes('0')) {
        return v = 'Beep!';
      } else {
        return v;
      }
    }
  })
  return translatedArray;
}

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var userName = $("#userName").val();
    $("#result, p").text(translater(userInput, userName).join(' '));
    $("#result").show();
  });
});
