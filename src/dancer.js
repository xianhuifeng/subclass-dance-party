var MakeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
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

MakeDancer.prototype.inline = function(){
  this.$node.css({top:'50%'});
};
