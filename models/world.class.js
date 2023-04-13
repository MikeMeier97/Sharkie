class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  mute = false; 
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
    document.getElementById('loader').classList.remove('d-none');
    document.getElementById('loaderText').classList.remove('d-none');
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    setTimeout(() => {
      document.getElementById('loader').classList.add('d-none');
      document.getElementById('loaderText').classList.add('d-none');
      this.run();
      this.background_music.play();
      this.canvas.classList.remove("d-none");
      document.getElementById('gameTitle').classList.remove('d-none');
      document.getElementById('headIcons').classList.remove('d-none');
      document.getElementById('footerPanel').classList.remove('d-none');
    }, 8000);
  }

  /**
   * music will stop if someone hit the music button in the top
   */
  stopBackgroundMusic() {
    const soundIcon = document.getElementById("sound");
    if (!this.mute) {
      soundIcon.src = "./assets/icons/musicOff.png";
      this.background_music.pause();
      this.level.enemies[15].boss_background_music.pause();
      this.mute = true; 
    } else if (this.level.enemies[15].boss_spawned) {
      soundIcon.src = "./assets/icons/musicOn.png";
      this.level.enemies[15].boss_background_music.play();
      this.mute = false; 
    } else {
      soundIcon.src = "./assets/icons/musicOn.png";
      this.background_music.play();
      this.mute = false; 
    }
  }

  /**
   * Checking for colliding with someone
   * @param {obj} mo
   * @param {obj} object
   * @returns
   */
  isColliding(mo, object) {
    return (
      object.x + object.width - object.offset.right > mo.x + mo.offset.left &&
      object.y + object.height - object.offset.bottom > mo.y + mo.offset.top &&
      object.x + object.offset.left < mo.x - mo.offset.right &&
      object.y + object.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * checks the buttle for collision
   */
  checkCollisionBubbleEnemy() {
    setInterval(() => {
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
    }, 5);
  }

  /**
   * sharkie hits an enemy
   * @param {obj} enemy
   */
  hitEnemy(enemy) {
    if (enemy == 15) {
      this.level.enemies[enemy].energy -= 25;
      this.level.enemies[enemy].hit();
    } else {
      this.level.enemies[enemy].energy -= 10;
    }
  }

  /**
   * checks for hitting a enemy
   */
  checkCollisionsEnemy() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.isColliding(enemy, this.character)) {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      });
    }, 10);
  }

  /**
   * checks for hitting a coin
   */
  checkCollisionsCoin() {
    setInterval(() => {
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
    }, 50);
  }

  /**
   * checks for hitting a bottle
   */
  checkCollisionsBottle() {
    setInterval(() => {
      this.level.bottle.forEach((bottle, bottleIndex) => {
        if (this.isColliding(bottle, this.character)) {
          if (this.character.bottleLvl < 100) {
            this.character.bottleLvl += 20;
            this.bottle_sound.play();
            this.bottleBar.setPercentage(this.character.bottleLvl);
            this.level.bottle.splice(bottleIndex, 1);
          }
        }
      });
    }, 5);
  }

  /**
   * this function will animate the checking functions evry 0,05 sec.
   */
  run() {
    this.checkCollisionsEnemy();
    this.checkCollisionsCoin();
    this.checkCollisionsBottle();
    this.checkThrowobjects();
    this.checkCollisionBubbleEnemy();
  }

  /**
   * shoot the bubble
   */
  checkThrowobjects() {
    setInterval(() => {
      if (
        this.keyboard.D &&
        this.character.bottleLvl > 0 &&
        this.throwableObjects == 0
      ) {
        let bottle = new ThrowableObject(this.character.x, this.character.y);
        this.throwableObjects.push(bottle);
        this.character.bottleLvl -= 20;
        this.deletBubble();
        this.bottleBar.setPercentage(this.character.bottleLvl);
      }
    }, 100);
  }

  /**
   * delet the bubble when out of range
   */
  deletBubble() {
    setTimeout(() => {
      this.throwableObjects.splice(0, 1);
    }, 500);
  }

  /**
   * draw the elements on the canvas.
   */
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

      let self = this; // this will not work. Than, we make self.
      requestAnimationFrame(function () {
        self.draw();
      });
    } catch (e) {
      // if one picture was not found we send you an error :)
      console.warn("Error loading image", e);
      console.log("Could not load image:", this.img);
    }
  }

  /**
   * add a object to canvas
   * @param {obj} objects
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * the object looks in the right direction in wich it also swims
   * @param {obj} mo
   */
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

  /**
   * givs the mobs the world and his functions
   */
  setWorld() {
    this.character.world = this;
    for (let i = 0; i < this.level.enemies.length; i++) {
      this.level.enemies[i].world = this;
    }
  }

  /**
   * the image will flippt
   * @param {obj} mo
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * the image will flippt back
   * @param {obj} mo
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
