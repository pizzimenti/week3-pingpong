describe('pingPong', function () {
  it("displays 1 for any given valid input", function() {
    expect(pingPong(1)).to.equal(1);
  });
  it("displays range up to 'rangeMax' value", function () {
    expect(pingPong(2)).to.equal([1,2]);
  });
});
