var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.color = 'red';
  this.hello = 'hello';

  Dancer.prototype.step.call(this);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
