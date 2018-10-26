$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    var userInput = Math.abs($("#userInput").val());

    var enumerated = [];
    for (i=0; i<=userInput; i++){
      enumerated.push(i);
    }
    var translatedArray = enumerated.map(function(v) {
      if (v%3===0){
        return v="I'm sorry, Dave. I'm afraid I can't do that.";
      } else{
        digits = v.toString().split('');
        if (digits.includes('1')){
          return v='Boop!'
        } else if (digits.includes('0')){
          return v='Beep!'
        } else{
          return v;
        }
      }
    })

    $("#result, p").text(translatedArray.join(' '));
    $("#result").show();
  });
});
