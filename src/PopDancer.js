var PopDancer = function(top, left, timeBetweenSteps){
	makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="popDancer"></span>');
    makeDancer.prototype.setPosition.call(this, top, left);
}

PopDancer.prototype = Object.create(makeDancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step= function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}