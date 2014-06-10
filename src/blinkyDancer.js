var MakeMarioDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this._oldStep = MakeDancer.prototype.step;
  this.state = false;
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass('marioFace');
  //debugger
  //this.blinkyStep();

};

MakeMarioDancer.prototype = Object.create(MakeDancer.prototype);
MakeMarioDancer.prototype.constructor = MakeMarioDancer;
MakeMarioDancer.prototype._oldStep = MakeDancer.prototype.step;
// Do not change oldStep as this will change the parent constructor.
MakeMarioDancer.prototype.step = function(){

  // call the old version of step at the beginning of any call to this new version of step
  this._oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  //MakeDancer.prototype.step.call(this);
  // See http://api.jquery.com/category/effects/ for thi`s and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.state){
    this.$node.addClass('marioFace');
    this.$node.removeClass('marioBack');
    this.state = false;
  }else{
    this.$node.removeClass('marioFace');
    this.$node.addClass('marioBack');
    this.state = true;
  }
};




