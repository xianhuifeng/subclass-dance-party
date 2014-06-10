var MakeLuigiDancer = function(top, left, timeBetweenSteps){
  this.state = 0;
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.addClass('luigi1');
};

MakeLuigiDancer.prototype = Object.create(MakeDancer.prototype);
MakeLuigiDancer.prototype.constructor = MakeLuigiDancer;
MakeLuigiDancer.prototype._oldStep = MakeDancer.prototype.step;
MakeLuigiDancer.prototype.step = function(){

  this._oldStep();
  if(this.state === 0){
    this.$node.addClass('luigi2');
    this.$node.removeClass('luigi1');
    this.state = 1;
  }else if(this.state === 1){
    this.$node.removeClass('luigi2');
    this.$node.addClass('luigi3');
    this.state = 2;
  }else{
    this.$node.removeClass('luigi3');
    this.$node.addClass('luigi1');
    this.state = 0;

  }


};




