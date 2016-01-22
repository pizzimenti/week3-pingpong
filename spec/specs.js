describe('pingPong', function () {
  it("displays 1 for any given valid input", function() {
    expect(pingPong(1)).to.eql([1]);
  });
  it("displays range up to 'rangeMax' value", function () {
    expect(pingPong(2)).to.eql([1,2]);
  });
  it("displays 'ping' for any number divisible by 3", function () {
    expect(pingPong(3)).to.eql([1,2,'ping']);
  });
});
