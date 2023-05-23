var SuperHeroDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.direction = getRandomInt(1, 2) === 2 ? 'right' : 'left';
  this.speed = getRandomInt(1, 5);
  this.lineup = false;


  this.$node = $('<img src="src/SuperHeroDancer_Image.png">');
  this.$node.addClass('dancer');
  this.$node.addClass('superHeroDancer');

  Dancer.prototype.step.call(this);
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;
SuperHeroDancer.prototype.step = function () {
  if (this.lineup) {
    Dancer.prototype.setPosition.call(this, this.top, this.left);
    this.$node.removeClass('flip-horizontally');

    return;
  } else {
    Dancer.prototype.step.call(this);
  }

  if (this.direction === 'right') {
    this.left = this.left + this.speed;
  } else {
    this.$node.addClass('flip-horizontally');
    this.left = this.left - this.speed;
  }

  if (this.left <= 0) {
    this.direction = 'right';
    this.$node.removeClass('flip-horizontally');

  } else if (this.left >= $('body').width() - this.$node.width()) {
    this.$node.addClass('flip-horizontally');
    this.direction = 'left';
  }

  Dancer.prototype.setPosition.call(this, this.top, this.left);
};