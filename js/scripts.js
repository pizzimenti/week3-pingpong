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

      var rangeMax = parseInt($("input#rangeMax").val());

      var resultArray = pingPong(rangeMax);
      var result = resultArray.toString();

      $("#result").text(result);
  });
});
