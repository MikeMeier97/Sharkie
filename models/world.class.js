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
    if (this.throwableObjects.length > 0) {
      this.level.enemies.forEach((enemy, enemyIndex) => {
        this.throwableObjects.forEach((bottle, bottleIndex) => {
          if (this.isColliding(enemy, bottle)) {
            this.hitEnemy(enemyIndex);
            this.throwableObjects.splice(bottleIndex, 1);
          }
        });
      });
    }
  }
  hitEnemy(enemy) {
    console.log(enemy);
    if (enemy == 15) {
      this.level.enemies[enemy].energy -= 25;
      this.level.enemies[enemy].hit();
    } else {
      this.level.enemies[enemy].energy -= 10;
    }
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
    this.level.coins.forEach((coin, coinIndex) => {
      if (this.isColliding(coin, this.character)) {
        if (this.character.coinLvl < 100) {
          this.character.coinLvl += 20;
          this.coin_sound.play();
          this.coinBar.setPercentage(this.character.coinLvl);
          this.level.coins.splice(coinIndex, 1);
        }
      }
    });
  }
  checkCollisionsBottle() {
    this.level.bottle.forEach((bottle, bottleIndex) => {
      if (this.isColliding(bottle, this.character)) {
        if (this.character.bottleLvl < 100) {
          this.character.bottleLvl += 20;
          this.bottle_sound.play();
          this.bottleBar.setPercentage(this.character.bottleLvl);
          setTimeout(() => {
            this.level.bottle.splice(bottleIndex, 1);
          }, 200);
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
      this.checkCollisionBubbleEnemy();
    }, 50);
  }
  checkThrowobjects() {
    if (
      this.keyboard.D &&
      this.character.bottleLvl > 0 &&
      this.throwableObjects == 0
    ) {
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
      this.character.bottleLvl -= 20;
      setTimeout(() => {
        this.throwableObjects.splice(0, 1);
      }, 500);
      this.bottleBar.setPercentage(this.character.bottleLvl);
    }
  }
  draw() {
    try {
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
    } catch (e) {
      console.warn("Error loading image", e);
      console.log("Could not load image", this.img);
    }
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

  startGame() {
    console.log(this.level);
    this.level.push(initLevel());
    setTimeout(() => {
      this.draw();
      this.setWorld();
      this.run();
      this.character.animate();
      this.background_music.play();
    }, 500);
  }
}
