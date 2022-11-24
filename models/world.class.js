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
        new BackgroundObject('./assets/img/background/Legacy/Layers/1. Light/2.png',0)
    ]
    canvas;
    ctx;
    keyboard;
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();    
        this.setWorld();
    }
    draw() { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
    setWorld() {
        this.character.world = this; 
    }
}