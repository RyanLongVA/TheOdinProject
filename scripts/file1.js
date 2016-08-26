$(document).ready(function() {
  //var i = $('#container div').length
  for (var i = 1; i <=16; i++) {
    $('#container').append("<div class='row' id='row"+i+"'\
      style='height:10px;'></div>");
    for (x = 1; x <=16; x++) {
      $('#row'+i).append("<div class='row"+i+"'style='padding-top: 0px margin-top:0px;\
                        display:inline-block; background-color:white;\
                        width:10px; height:10px;\
                        border: 1px solid black;'></div>")

                console.log(x)
          $('.row'+i).hover(function(){
          $(this).css('background-color', 'black');

        })
    }
    console.log("Row "+i+" complete!");
  }
})

function resetGrid() {
  for (var i = 1; i <= $('#container .row').length; i++) {
  $('.row'+i).css('background-color', 'white');
    }
  }

function changeRows() {
  $('#container div').remove();
  var widthVal = prompt('Specify a new value for the width (between 1 and 16)');
  var heightVal = prompt('Specify a new value for the height (between 1 and 16)');
  while (widthVal > 16) {
    alert('The width value you chose exceeds 16')
    widthVal = prompt('Please choose a value between 1 and 16')
  }
  while (widthVal < 1) {
    alert('Your width value is invalid')
    widthVal = prompt('Please choose a value larger than 0')
  }
  while (heightVal > 16) {
    alert ('The height value you picked exceeded 16')
    heightVal = prompt('Please choose a value between 1 and 100')
  }
  while (heightVal < 1) {
    alert('Your height value is invalid')
    heightVal = prompt('Please choose a value larger than 0')
  }
  for (var x = 1; x <= heightVal; x++) {
    $('#container').append("<div class='row' id='row"+x+"'\
      style='height:10px; margin: 0px'></div>");
    for (a = 1; a <= widthVal; a++) {
      $('#row'+x).append("<div class='row"+x+"'style='padding-top: 0px margin-top:0px;\
                        display:inline-block; background-color:white;\
                        width:10px; height:10px;\
                        border: 1px solid black;'></div>")

    }
       $('.row'+x).hover(function(){
              $(this).css('background-color', 'black');
      })
  }
}

