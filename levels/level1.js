const level1 = new Level(
    [
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new JellyFish(),
    new Endboss()
    ],
    [
        new BackgroundObject('./assets/img/background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('./assets/img/background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('./assets/img/background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('./assets/img/background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('./assets/img/background/Layers/1. Light/2.png', 0),
        new BackgroundObject('./assets/img/background/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObject('./assets/img/background/Layers/5. Water/D2.png', 720),
        new BackgroundObject('./assets/img/background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('./assets/img/background/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('./assets/img/background/Layers/1. Light/2.png',720),
        new BackgroundObject('./assets/img/background/Layers/4.Fondo 2/D1.png', 720*2),
        new BackgroundObject('./assets/img/background/Layers/5. Water/d1.png', 720*2),
        new BackgroundObject('./assets/img/background/Layers/3.Fondo 1/D1.png', 720*2),
        new BackgroundObject('./assets/img/background/Layers/2. Floor/D1.png', 720*2),
        new BackgroundObject('./assets/img/background/Layers/1. Light/2.png',720*2),
        new BackgroundObject('./assets/img/background/Layers/4.Fondo 2/D2.png', 720*3),
        new BackgroundObject('./assets/img/background/Layers/5. Water/d2.png', 720*3),
        new BackgroundObject('./assets/img/background/Layers/3.Fondo 1/D2.png', 720*3),
        new BackgroundObject('./assets/img/background/Layers/2. Floor/D2.png', 720*3),
        new BackgroundObject('./assets/img/background/Layers/1. Light/2.png',720*3),
        new BackgroundObject('./assets/img/background/Layers/4.Fondo 2/D1.png', 720*4),
        new BackgroundObject('./assets/img/background/Layers/5. Water/d1.png', 720*4),
        new BackgroundObject('./assets/img/background/Layers/3.Fondo 1/D1.png', 720*4),
        new BackgroundObject('./assets/img/background/Layers/2. Floor/D1.png', 720*4),
        new BackgroundObject('./assets/img/background/Layers/1. Light/2.png',720*4),
        new BackgroundObject('./assets/img/background/Layers/4.Fondo 2/D2.png', 720*5),
        new BackgroundObject('./assets/img/background/Layers/5. Water/d2.png', 720*5),
        new BackgroundObject('./assets/img/background/Layers/3.Fondo 1/D2.png', 720*5),
        new BackgroundObject('./assets/img/background/Layers/2. Floor/D2.png', 720*5),
        new BackgroundObject('./assets/img/background/Layers/1. Light/2.png',720*5)
    ],
    [
        new Coin(600, 350),
        new Coin(700, 350),
        new Coin(900, 350)
    ],
    [
        new Bottle(300, 350),
        new Bottle(380, 340)
    ]
); 