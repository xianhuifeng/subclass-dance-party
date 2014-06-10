var MakeMarioDancer = function(top, left, timeBetweenSteps){

  this.state = false;
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass('marioFace');
};

MakeMarioDancer.prototype = Object.create(MakeDancer.prototype);
MakeMarioDancer.prototype.constructor = MakeMarioDancer;
MakeMarioDancer.prototype._oldStep = MakeDancer.prototype.step;
MakeMarioDancer.prototype.step = function(){

  this._oldStep();
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




