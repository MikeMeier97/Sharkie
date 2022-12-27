let level1;
function initLevel() {
  level1 = new Level(
    [
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 0),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 1),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 2),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 3),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 4),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 5),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 6),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 7),
      new PufferFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 8),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 9),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 10),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 11),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 12),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 13),
      new JellyFish(200 + Math.random() * 3600, 50 + Math.random() * 250, 14),
      new Endboss(3900, 50, "boss"),
    ],
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
      new BackgroundObject( "./assets/img/background/Layers/Water/d1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D1.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 2),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Water/d2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 3),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Water/d1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D1.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 4),
      new BackgroundObject( "./assets/img/background/Layers/Fondo2/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Water/d2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Fondo1/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Floor/D2.png", 720 * 5),
      new BackgroundObject( "./assets/img/background/Layers/Light/2.png", 720 * 5),
    ],
    [
      new Coin(600, 350), 
      new Coin(700, 350), 
      new Coin(900, 350)
    ],
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