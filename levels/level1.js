let level1;

/**
 * load the level when press start game btn 
 */
function initLevel() {
  level1 = new Level(


    /**
     * add the bots 
     */
    [
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250),
      new Endboss(3900, 50, "boss"),
    ],


    /**
     * add the background objects
     */
    [ 
      new BackgroundObject("./assets/img/background/Layers/Water/D1.png", 0),
      new BackgroundObject("./assets/img/background/Layers/Fondo2/D1.png", 0),
      new BackgroundObject("./assets/img/background/Layers/Fondo1/D1.png", 0),
      new BackgroundObject("./assets/img/background/Layers/Floor/D1.png", 0),
      new BackgroundObject("./assets/img/background/Layers/Light/2.png", 0),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D2.png", 720),
      new BackgroundObject("./assets/img/background/Layers/Water/D2.png", 720),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D2.png", 720),
      new BackgroundObject("./assets/img/background/Layers/Floor/D2.png", 720),
      new BackgroundObject("./assets/img/background/Layers/Light/2.png", 720),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Water/D1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Water/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Water/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Water/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 5),
    ],


    /**
     * add the coin items 
     */
    [
      new Coin(600, 350), 
      new Coin(700, 350), 
      new Coin(900, 350)
    ],


    /**
     * add the bottle items
     */
    [
      new Bottle(300, 350), 
      new Bottle(380, 340),
      new Bottle(500, 350), 
      new Bottle(780, 330),
      new Bottle(1600, 320), 
      new Bottle(880, 320),
      new Bottle(2800, 370), 
      new Bottle(3500, 320),
    ]
  );
}