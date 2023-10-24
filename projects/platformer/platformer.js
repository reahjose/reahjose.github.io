$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

   for (let i = 100; i < canvas.width; i += 100) {
     createPlatform(i, canvas.height, -1, -canvas.height);
   }
    for (let i = 100; i < canvas.height; i += 100) {
     createPlatform(canvas.width, i, -canvas.width, -1);
  }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    createPlatform(730, 110,  150, 10); // 10
    createPlatform(460, 230, 150, 10); // 9
    createPlatform(950, 230, 150, 10); // 8
    createPlatform(730, 330, 150, 10); // 7
    createPlatform(440, 430, 150, 10); // 6
    createPlatform(1100,350, 150, 10);//5
    createPlatform(930, 430, 150, 10);//4
    createPlatform(740, 556, 150, 10);//3
    createPlatform(460, 600, 150, 10);//2
    createPlatform(700, 700, 150, 10);//1
    
    

    
    
    
    // TODO 2
    createCollectable("database", 730, 120, .3, 1); 10
    createCollectable("diamond", 460, 240, .3, 1); 9
    createCollectable("grace", 950, 240, .3, 1); 8
    createCollectable("kennedi", 730, 340, .3, 1); 7
    createCollectable("max", 440, 440, .3, 1); 6
    createCollectable("steve",1100, 200, .3, 1); 5


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('left', 100, 1500, 15, 15);
    createCannon('right', 500, 1500, 15, 15);
     createCannon('top', 758, 1500, 15, 15);
   




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
