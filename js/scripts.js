var pingPong = function(rangeMax) {
  var ppArray = [];
  for (var i = 0; i <= rangeMax; i++) {
    ppArray.push(i);
  }
  ppArray.splice(0,1);
  return ppArray;
};
