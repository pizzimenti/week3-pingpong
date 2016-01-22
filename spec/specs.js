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
  it("displays 'pong' for any number divisible by 5", function () {
    expect(pingPong(5)).to.eql([1,2,'ping',4,'pong']);
  });
  it("displays 'pingpong' for any number divisible by 15", function () {
    expect(pingPong(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',14,'pingpong']);
  })
});
