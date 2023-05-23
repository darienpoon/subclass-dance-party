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
  it('should fly across the screen', function () {
    expect(superHeroDancer.$node.css('left')).to.be.equal('20px');
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

    var expected;
    if (superHeroDancer.direction === 'right') {
      expected = superHeroDancer.left + superHeroDancer.speed;
    } else {
      expected = superHeroDancer.left - superHeroDancer.speed;
    }

    clock.tick(timeBetweenSteps);

    expect(superHeroDancer.$node.css('left')).to.be.equal(expected + 'px');
  });
});
