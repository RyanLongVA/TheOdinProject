$(document).ready(function() {
  var i = $('#container div').length
  for (var i = 1; i <=16; i++) {

  for (x = 1; x <=16; x++) {
  $('#container').append("<div style='margin: auto;\
    display:inline-block; background-color:white;\
    width:50px; height:50px;\
    border: 1px solid black;'></div>")
  console.log("Row "+i+" complete!"); 
    } 
  }
})