$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();


    $("#story").append("<p>"+result+"</p>");
    $("#story").show();
  });
});
