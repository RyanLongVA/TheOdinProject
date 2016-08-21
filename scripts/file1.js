$(document).ready(function() {
  var i = $('#container div').length
  for (i = 0; i <= 16; i++) {
  $('#container').append("<div class='row1'></div>")
  console.log($('#container div').length)
  }
  console.log("complete");
})