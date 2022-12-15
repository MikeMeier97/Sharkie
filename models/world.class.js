class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    bottleBar = new Bottlebar();
    coinBar = new Coinbar();
    throwableObjects = [];


    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();    
        this.setWorld();
        this.run();
    }
    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }
    checkCollisionsCoin(){
        this.level.coins.forEach((coin) => {
            if(this.character.isColliding(coin)) {
                if(this.character.coinLvl < 100){
                this.character.coinLvl += 20;
                this.coinBar.setPercentage(this.character.coinLvl);
                this.level.coins.splice(0, 1);
            }}
        });
    }
    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkCollisionsCoin();
            this.checkThrowobjects(); 
        }, 200);
    }
    checkThrowobjects() {
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
        }
    }
    draw() { 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.throwableObjects);
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
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }
    setWorld() {
        this.character.world = this; 
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}