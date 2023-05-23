var SuperHeroDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.direction = getRandomInt(1, 2) === 2 ? 'right' : 'left';
  this.speed = getRandomInt(1, 5);

  Dancer.prototype.step.call(this);
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;
SuperHeroDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  if (this.direction === 'right') {
    this.left = this.left + this.speed;
  } else {
    this.left = this.left - this.speed;
  }

  if (this.left <= 0) {
    this.direction = 'right';
  } else if (this.left >= $('body').width()) {
    this.direction = 'left';
  }

  Dancer.prototype.setPosition.call(this, this.top, this.left);
};