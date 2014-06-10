var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  MakeDancer.call(this,top,left,timeBetweenSteps);
  //debugger
  //this.blinkyStep();

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype._oldStep = MakeDancer.prototype.step;
// Do not change oldStep as this will change the parent constructor.
MakeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this._oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
