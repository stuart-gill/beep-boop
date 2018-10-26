$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    var enumerated = [];
    var dave = "I'm sorry Dave";
    for (i=0; i<=input; i++){
      enumerated.push(i);
    }
    var result = enumerated.map(function(v) {
      if (v%3===0){
        return v=dave;
      } else{
        digits = v.toString().split('');
        if (digits.includes('1')){
          return v='boop'
        } else if (digits.includes('0')){
          return v='beep'
        } else{
          return v;
        }
      }
    })
    console.log(result);


    // var num = 123456;
    // var digits = num.toString().split('');
    // var realDigits = digits.map(Number)
    // console.log(realDigits);
    // $("#story").append("<p>"+result+"</p>");
    // $("#story").show();
  });
});
