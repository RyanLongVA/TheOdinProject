$(document).ready(function() {
  //var i = $('#container div').length
  for (var i = 1; i <=16; i++) {
    $('#container').append("<div class='row' id='row"+ i +"\
      'style='height:10px; margin: 0px'></div>");
    for (x = 1; x <=16; x++) {
      $('#row'+i).append("<div style='padding-top: 0px margin-top:0px;\
                        display:inline-block; background-color:white;\
                        width:10px; height:10px;\
                        border: 1px solid black;'></div>")

        console.log(x)
    }
    console.log("Row "+i+" complete!");
  }
})