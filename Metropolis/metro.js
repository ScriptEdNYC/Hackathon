$(function () {
  /* Metropolis Javascript */
  function buildMetropolis() {
    var howManyBuildings = randomInteger(100); // determine how many buildings
    var landscape = $('#met-container'); // find the landscape
    var buildingImgArray = [ // list of building images
        "http://i.imgur.com/FwHmWuA.png", 
        "http://i.imgur.com/BcjZyCz.png", 
        "http://i.imgur.com/MMTpZcw.png",
        "http://i.imgur.com/7dL3YzQ.png",
        "http://i.imgur.com/OnEFmn6.png"
    ];
    for(var i=0; i<howManyBuildings; i++) { // loop through buildings
      building = $('<img class="building" src="'+buildingImgArray[randomInteger(buildingImgArray.length)-1]+'" />'); // create the building
      building.css('left', randomInteger(1000));
      landscape.append(building); // add it to the landscape
      building.animate({
        bottom: '+=50',
        width: randomInteger(150)
      }, 1000, function() { 
        // Animation complete.
      });
    }
  }

  function makeItRain() {
    var howMuchRain = Math.floor((Math.random()*50)+1); // determine how many buildings
    var landscape = $('#met-container');
    for(var i=0; i<howMuchRain; i++) { // loop through buildings
      rainDrop = $('<div class="block circle" />'); // create the building
      rainDrop.css('left', randomInteger(1000));
      landscape.append(rainDrop); // add it to the landscape
      rainDrop.animate({
        top: '+=800',
        width: randomInteger(20)
      }, randomInteger(6000));
    }
  }

  /* Helper Functions */
  function randomInteger(howMany) {
    return Math.floor((Math.random()*howMany)+1);
  }

  /* jQuery */
  $('#met-builder-btn').click(function() {
    buildMetropolis();
  });
  $('#met-rain-btn').click(function() {
    makeItRain();
  });
});