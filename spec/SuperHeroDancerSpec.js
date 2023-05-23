describe('SuperHeroDancerSpec', function () {

  var superHeroDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    superHeroDancer = new SuperHeroDancer(
      10, 20, timeBetweenSteps
    );
  });

  it('should have a jQuery $node object', function () {
    expect(superHeroDancer.$node).to.be.an.instanceof(jQuery);
  });

  // test if it moves
  it('should fly across the screen', function() {
    console.log(superHeroDancer);
  });
});
