$(document).ready(function(){
  window.counter= 1;
  window.dancers = {};
  window.marioDancers = {};
  window.luigiDancers = {};
  window.textDancers = {};

  $(".addDancerButton").on("click", function(event){
    /* This function sets up `the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    if(dancerMakerFunctionName === "MakeMarioDancer"){
      window.marioDancers[window.counter] = dancer;
    }
    if(dancerMakerFunctionName === "MakeLuigiDancer"){
      window.luigiDancers[window.counter] = dancer;

    }
    if(dancerMakerFunctionName === "MakeTextDancer"){
      window.textDancers[window.counter] = dancer;
    }
    window.dancers[window.counter] = dancer;
    dancer.$node.attr('id', window.counter);
    window.counter++;
    $('body').append(dancer.$node);
    $('.text').click(moveText);
    $('.mario').mouseover(hoverMario);

  });
//change
  var each = function(array, callback){
    if (Array.isArray(array)){
      for (var i =0; i<array.length; i++){
        callback(array[i]);
      }
    }else{
      for (var key in array){
        callback(array[key]);
      }
    }
  };

  //change
  $(".alignSprites").on("click", function(event){
    each(window.dancers, function(dancer){
      dancer.inline();
    });
  });
  var hoverMario = function(event){
    var id = $(this).attr('id');
    var clickedMario = window.marioDancers[id];
    $(this).removeClass('marioFace marioBack');
    clickedMario.explode();
    var $sound = '<embed height="50" width="100" src="explodeSound.mp3">';
    $('.sound').append($sound);
  };

  var moveText = function(event){
    var id = $(this).attr('id');
    var clickedText = window.textDancers[id];
    var coordinates = clickedText.getPosition();
    for (var key in window.textDancers){
      if(key !== id){
        var coordinates2 = window.textDancers[key].getPosition();
        var x = coordinates2.top - coordinates.top;
        var y = coordinates2.left - coordinates.left;
        var zSquared = Math.pow(x,2) + Math.pow(y,2);
        var z = Math.sqrt(zSquared);
        if (z > .25*screen.width){
          window.textDancers[key].setPosition(coordinates2.top-(.5*z),coordinates2.left-(.5*z));
        }else{
          window.textDancers[key].setPosition(coordinates2.top+(.5*z),coordinates2.left+(.5*z));
        }
      }
    }
  };

  //on click text, grab id,
});
