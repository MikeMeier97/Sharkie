class World {
    character = new Character();
    enemies = [
    new Bot(),
    new Bot(),
    new Bot()
    ];
    backgroundObjects = [
        new BackgroundObject('./assets/img/background/Legacy/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('./assets/img/background/Legacy/Layers/5. Water/d1.png', 0),
        new BackgroundObject('./assets/img/background/Legacy/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('./assets/img/background/Legacy/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png', 0),
        new BackgroundObject('./assets/img/background/Legacy/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObject('./assets/img/background/Legacy/Layers/5. Water/d2.png', 720),
        new BackgroundObject('./assets/img/background/Legacy/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('./assets/img/background/Legacy/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png',720),
        new BackgroundObject('./assets/img/background/Legacy/Layers/4.Fondo 2/D1.png', 720*2),
        new BackgroundObject('./assets/img/background/Legacy/Layers/5. Water/d1.png', 720*2),
        new BackgroundObject('./assets/img/background/Legacy/Layers/3.Fondo 1/D1.png', 720*2),
        new BackgroundObject('./assets/img/background/Legacy/Layers/2. Floor/D1.png', 720*2),
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png',720*2),
        new BackgroundObject('./assets/img/background/Legacy/Layers/4.Fondo 2/D2.png', 720*3),
        new BackgroundObject('./assets/img/background/Legacy/Layers/5. Water/d2.png', 720*3),
        new BackgroundObject('./assets/img/background/Legacy/Layers/3.Fondo 1/D2.png', 720*3),
        new BackgroundObject('./assets/img/background/Legacy/Layers/2. Floor/D2.png', 720*3),
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png',720*3),
        new BackgroundObject('./assets/img/background/Legacy/Layers/4.Fondo 2/D1.png', 720*4),
        new BackgroundObject('./assets/img/background/Legacy/Layers/5. Water/d1.png', 720*4),
        new BackgroundObject('./assets/img/background/Legacy/Layers/3.Fondo 1/D1.png', 720*4),
        new BackgroundObject('./assets/img/background/Legacy/Layers/2. Floor/D1.png', 720*4),
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png',720*4),
        new BackgroundObject('./assets/img/background/Legacy/Layers/4.Fondo 2/D2.png', 720*5),
        new BackgroundObject('./assets/img/background/Legacy/Layers/5. Water/d2.png', 720*5),
        new BackgroundObject('./assets/img/background/Legacy/Layers/3.Fondo 1/D2.png', 720*5),
        new BackgroundObject('./assets/img/background/Legacy/Layers/2. Floor/D2.png', 720*5),
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png',720*5)
    ]
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();    
        this.setWorld();
    }
    draw() { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    addToMap(mo) {
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
    setWorld() {
        this.character.world = this; 
    }
}