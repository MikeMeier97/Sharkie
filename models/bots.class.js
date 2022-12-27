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
    "./assets/img/enemy/PufferFish/2.transition/1.transition1.png"
  ];
  IMAGES_PUFFERFISH_DEAD = [
    "./assets/img/enemy/PufferFish/4.DIE/1.Dead 1.png",
    "./assets/img/enemy/PufferFish/4.DIE/1.Dead 2.png",
    "./assets/img/enemy/PufferFish/4.DIE/1.Dead 3.png",
  ];
  constructor(x, y, id) {
    super().loadImage("./assets/img/enemy/PufferFish/1.Swim/1.swim1.png");
    this.loadImages(this.IMAGES_PUFFERFISH);
    this.loadImages(this.IMAGES_PUFFERFISH_DEAD);
    this.x = x; //200 + Math.random() * 3600;
    this.y = y; //50 + Math.random() * 250;
    this.id = id;
    this.speed = 0.4 + Math.random() * 1;

    this.animate();
  }
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      if (this.energy >= 10) {
        this.playAnimation(this.IMAGES_PUFFERFISH);
      } else if(!this.isDead){
        this.playAnimationOnce(this.IMAGES_PUFFERFISH_DEAD);
        setInterval(() => {
          this.y -= 10;
        }, 50);
        this.isDead = true;
      }
    }, 300);
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
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink 1.png",
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink 2.png",
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink 3.png",
    "./assets/img/enemy/JellyFish/SuperDangerous/Pink 4.png",
  ];
  IMAGES_JELLYFISH_DEAD = [
    "./assets/img/enemy/JellyFish/Dead/Lila/L1.png",
    "./assets/img/enemy/JellyFish/Dead/Lila/L2.png",
    "./assets/img/enemy/JellyFish/Dead/Lila/L3.png",
    "./assets/img/enemy/JellyFish/Dead/Lila/L4.png",
  ];
  constructor(x, y, id) {
    super().loadImage(
      "./assets/img/enemy/JellyFish/SuperDangerous/Pink 1.png"
    );
    this.loadImages(this.IMAGES_JELLYFISH);
    this.loadImages(this.IMAGES_JELLYFISH_DEAD);
    this.x = x; //200 + Math.random() * 3600;
    this.y = y; //50 + Math.random() * 250;
    this.id = id;
    this.speed = 0.4 + Math.random() * 1;

    this.animate();
  }
  animate() {
    setInterval(() => {
      this.y += this.swimDirection * this.speed;
      if (this.y > this.ceilingHeight) {
        this.swimDirection = -1;
      }
      if (this.y < 0) {
        this.swimDirection = 1;
      }
    }, 50);
    setInterval(() => {
      if (this.energy >= 10) {
        this.playAnimation(this.IMAGES_JELLYFISH);
      } else if(!this.isDead){
        this.playAnimationOnce(this.IMAGES_JELLYFISH_DEAD);
        setInterval(() => {
          this.y -= 10;
        }, 50);
        this.isDead = true;
      }
    }, 100);
  }
}
