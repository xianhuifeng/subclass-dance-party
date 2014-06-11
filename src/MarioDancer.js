var MakeMarioDancer = function(top, left, timeBetweenSteps){

  this.state = false;
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass('mario');
  this.$node.addClass('marioFace');
};

MakeMarioDancer.prototype = Object.create(MakeDancer.prototype);
MakeMarioDancer.prototype.constructor = MakeMarioDancer;
MakeMarioDancer.prototype._oldStep = MakeDancer.prototype.step;
MakeMarioDancer.prototype.step = function(){
  if (this.state === true || this.state === false){
  this._oldStep();
  }
  if(this.state === true){
    this.$node.addClass('marioFace');
    this.$node.removeClass('marioBack');
    this.state = false;
  }else if(this.state ===false){
    this.$node.removeClass('marioFace');
    this.$node.addClass('marioBack');
    this.state = true;
  }
};

MakeMarioDancer.prototype.explode = function(){
  this.state = 2;
  this.$node.addClass('explode');
};




