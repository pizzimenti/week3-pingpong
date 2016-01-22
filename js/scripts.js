var pingPong = function(rangeMax) {
  var ppArray = [];
  for (var i = 0; i <= rangeMax; i++) {

    if (i % 3 === 0) {
      ppArray.push("ping");
    } else {

    ppArray.push(i);
    }
  }
  ppArray.splice(0,1);
  return ppArray;
};
