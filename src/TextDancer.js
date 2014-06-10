var MakeTextDancer = function(top, left, timeBetweenSteps){
  this.state = false;
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass('text');
};

MakeTextDancer.prototype = Object.create(MakeDancer.prototype);
MakeTextDancer.prototype.constructor = MakeTextDancer;
MakeTextDancer.prototype._oldStep = MakeDancer.prototype.step;
MakeTextDancer.prototype.step = function(){

  this._oldStep();
  this.$node.fadeIn();
  this.$node.fadeOut();

};




