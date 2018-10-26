$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    var enumerated = [];
    var dave = "I'm sorry Dave";
    for (i=0; i<=input; i++){
      enumerated.push(i);
    }
    var result = enumerated.map((v,i,a) => {
      return v%3===0? v=dave:v;
    })
    console.log(result);

    // $("#story").append("<p>"+result+"</p>");
    // $("#story").show();
  });
});
