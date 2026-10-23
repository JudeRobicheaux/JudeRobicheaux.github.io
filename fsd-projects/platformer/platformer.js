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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
createPlatform(200, 650, 200, 10, "gold");
createPlatform(600, 550, 100, 50, "gold" );
createPlatform(900, 450, 150, 25, "gold");
createPlatform(500, 350, 200, 25, "gold");
createPlatform(900, 225, 50, 25, "gold");
createPlatform(1185, 610, 100, 520, "blue");
createPlatform(1185, 150, 100, 375, "blue");
createPlatform(250, 250, 50, 50, "gold");
createPlatform(500, 150, 100, 25, "gold");
createPlatform(1280, 150, 140, 240, "blue");
    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("steve", 550, 100);
createCollectable("steve", 1260, 370);
    // TODO 4 - Create Cannons
createCannon("bottom", 1300, 600);
createCannon("bottom", 350, 900);
createCannon("top", 890, 800);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
