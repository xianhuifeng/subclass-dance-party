var MakeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this._top = top;
  this._left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();

};
MakeDancer.prototype.step = function(){
  setTimeout( this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
MakeDancer.prototype.getPosition = function(){
  return {
    top: this._top,
    left: this._left
  };
};

MakeDancer.prototype.inline = function(){
  this.$node.css({top:'50%'});
};
