$(document).ready(function () {
  window.dancers = [];

  $('.lineupButton').on('click', function (event) {
    // line up dancers on the left of the screen
    // dancer position = 0
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].left !== 0) {
        // window.dancers[i].left -= window.dancers[i].speed;
        window.dancers[i].left = 0;
        window.dancers[i].lineup = true;
      }
    }
  });

  $('.addDancerButton').on('click', function (event) {
    console.log(window.dancers);
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var top = $("body").height() * Math.random();
    var left = $("body").width() * Math.random();
    var speed = dancerMakerFunctionName === 'SuperHeroDancer' ? Math.random() * 50 : Math.random() * 1000;
    var dancer = new dancerMakerFunction(
      top, left, speed
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

