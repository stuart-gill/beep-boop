$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    var result = [];
    for (i=0; i<=input; i++){
      result.push(i);
    }
    console.log(result);
    // $("#story").append("<p>"+result+"</p>");
    // $("#story").show();
  });
});
