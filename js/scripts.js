var pingPong = function(rangeMax) {
  var ppArray = [];

  for (var i = 0; i <= rangeMax; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
    ppArray.push("pingpong");
    } else if (i % 3 === 0) {
      ppArray.push("ping");
    } else if (i % 5 === 0) {
      ppArray.push("pong");
    } else {
    ppArray.push(i);
    }
  }

  ppArray.splice(0,1);
  return ppArray;
};


$(function() {
  $("form#pingpong-form").submit(function(event) {
    event.preventDefault();

    var rangeMax = parseInt($("input#rangeMax").val()); //get rangeMax from the html form
    var resultArray = pingPong(rangeMax); // call business logic function to generate the result as an array
    var list = $("#pingpong-list"); //variable for UL in DOM
    var result = list.parent(); //define the list parent

    list.detach().empty().each(function(i){                 //detatch the list to keep dom from constant rerender, empty the list, and then perform...
      for (var x = 0; x < resultArray.length; x++){           //check to see if we still have results to display. if we do...
        $(this).append('<li>' + resultArray[x] + '</li>');    //append the current iteration to pongPongList
        if (x == resultArray.length - 1){                   //if we have reached the end of the array
            $(this).appendTo(result);               ///append the results to the list parent
          }
        }
    });
  });
});
