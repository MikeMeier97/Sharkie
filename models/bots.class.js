class PufferFish extends MovableObject {
  width = 80;
  height = 80;
  energy = 10;
  isDead = false;
  IMAGES_PUFFERFISH = [
    "./assets/img/enemy/PufferFish/1.Swim/1.swim1.png",
    "./assets/img/enemy/PufferFish/1.Swim/1.swim2.png",
    "./assets/img/enemy/PufferFish/1.Swim/1.swim3.png",
    "./assets/img/enemy/PufferFish/1.Swim/1.swim4.png",
    "./assets/img/enemy/PufferFish/1.Swim/1.swim5.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition1.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition2.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition3.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition4.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition5.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition4.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition3.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition2.png",
    "./assets/img/enemy/PufferFish/2.transition/1.transition1.png",
  ];
  IMAGES_PUFFERFISH_DEAD = [
    "./assets/img/enemy/PufferFish/4.DIE/1.Dead1.png",
    "./assets/img/enemy/PufferFish/4.DIE/1.Dead2.png",
    "./assets/img/enemy/PufferFish/4.DIE/1.Dead3.png",
  ];
  constructor(x, y, id) {
    super().loadImage("./assets/img/enemy/PufferFish/1.Swim/1.swim1.png");
    this.loadImages(this.IMAGES_PUFFERFISH);
    this.loadImages(this.IMAGES_PUFFERFISH_DEAD);
    this.x = x;
    this.y = y;
    this.speed = 0.4 + Math.random() * 3;
    this.animate();
  }

  /**
   * playing the animate by pufferFish
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      if (this.energy >= 10) {
        this.playAnimation(this.IMAGES_PUFFERFISH);
      } else if (!this.isDead) {
        this.pufferIsDead();
      }
    }, 300);
  }

  /**
   * playing the animate by dead pufferFish
   */
  pufferIsDead() {
    this.playAnimationOnce(this.IMAGES_PUFFERFISH_DEAD);
    setInterval(() => {
      this.y -= 5;
    }, 5);
    this.isDead = true;
  }
}
class JellyFish extends MovableObject {
  width = 80;
  height = 80;
  energy = 10;
  isDead = false;
  ceilingHeight = 400;
  fishHeight = 0;
  swimDirection = 1;
  IMAGES_JELLYFISH = [
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink1.png",
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink2.png",
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink3.png",
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink4.png",
  ];
  IMAGES_JELLYFISH_DEAD = [
    "./assets/img/enemy/JellyFish/Dead/Lila/L1.png",
    "./assets/img/enemy/JellyFish/Dead/Lila/L2.png",
    "./assets/img/enemy/JellyFish/Dead/Lila/L3.png",
    "./assets/img/enemy/JellyFish/Dead/Lila/L4.png",
  ];
  constructor(x, y, id) {
    super().loadImage("./assets/img/enemy/JellyFish/SuperDangerous/Pink1.png");
    this.loadImages(this.IMAGES_JELLYFISH);
    this.loadImages(this.IMAGES_JELLYFISH_DEAD);
    this.x = x;
    this.y = y;
    this.speed = 0.4 + Math.random() * 1;
    this.animate();
  }

  /**
   * playing the animate by jellyFish
   */
  animate() {
    setInterval(() => {
      this.animateUpDown();
    }, 50);
    setInterval(() => {
      if (this.energy >= 10) {
        this.playAnimation(this.IMAGES_JELLYFISH);
      } else if (!this.isDead) {
        this.jellyFishIsDead();
      }
    }, 100);
  }

  /**
   * playing the automatic up down animation by jellyfish
   */
  animateUpDown() {
    this.y += this.swimDirection * this.speed;
    if (this.y > this.ceilingHeight) {
      this.swimDirection = -1;
    }
    if (this.y < 0) {
      this.swimDirection = 1;
    }
  }

  /**
   * playing the dead animation by jellyfish
   */
  jellyFishIsDead() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_JELLYFISH_DEAD);
      this.y -= 10;
    }, 50);
    this.isDead = true;
  }
}
