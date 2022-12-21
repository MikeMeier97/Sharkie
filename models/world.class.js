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
  background_music = new Audio("./audio/game-music.mp3");
  coin_sound = new Audio("./audio/coin-collected.mp3");
  bottle_sound = new Audio("./audio/poison-collected.wav");

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.background_music.play();
    this.checkCollisionBubbleEnemy();
  }
  stopBackgroundMusic() {
    this.background_music.pause();
  }
  isColliding(mo, object) {
    return (
      object.x + object.width - object.offset.right > mo.x + mo.offset.left &&
      object.y + object.height - object.offset.bottom > mo.y + mo.offset.top &&
      object.x + object.offset.left < mo.x - mo.offset.right &&
      object.y + object.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  checkCollisionBubbleEnemy() {
    setInterval(() => {
      if (this.throwableObjects > 1) {
        console.log("wir kommen rein");
        this.level.enemies.forEach((enemy) => {
          if (this.isColliding(enemy, this.throwableObjects)) {
            console.log(enemy);
            console.log("HIT");
          }
        });
      }
    }, 500);
  }
  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.isColliding(enemy, this.character)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }
  checkCollisionsCoin() {
    this.level.coins.forEach((coin) => {
      if (this.isColliding(coin, this.character)) {
        if (this.character.coinLvl < 100) {
          this.character.coinLvl += 20;
          this.coin_sound.play();
          this.coinBar.setPercentage(this.character.coinLvl);
          this.level.coins.splice(0, 1);
        }
      }
    });
  }
  checkCollisionsBottle() {
    this.level.bottle.forEach((bottle) => {
      if (this.isColliding(bottle, this.character)) {
        if (this.character.bottleLvl < 100) {
          this.character.bottleLvl += 20;
          this.bottle_sound.play();
          this.bottleBar.setPercentage(this.character.bottleLvl);
          this.level.bottle.splice(0, 1);
        }
      }
    });
  }
  run() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkCollisionsCoin();
      this.checkCollisionsBottle();
      this.checkThrowobjects();
    }, 200);
  }
  checkThrowobjects() {
    if (
      this.keyboard.D &&
      this.character.bottleLvl > 0 &&
      this.character.x > 3000
    ) {
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
      this.character.bottleLvl -= 20;
      this.bottleBar.setPercentage(this.character.bottleLvl);
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
    requestAnimationFrame(function () {
      self.draw();
    });
  }
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }
  setWorld() {
    this.character.world = this;
    for (let i = 0; i < this.level.enemies.length; i++) {
      this.level.enemies[i].world = this;
    }
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
