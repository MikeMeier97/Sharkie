class PufferFish extends MovableObject {
  width = 80;
  height = 80;
  IMAGES_PUFFERFISH = [
    "./assets/img/enemy/1.Puffer fish/1.Swim/1.swim1.png",
    "./assets/img/enemy/1.Puffer fish/1.Swim/1.swim2.png",
    "./assets/img/enemy/1.Puffer fish/1.Swim/1.swim3.png",
    "./assets/img/enemy/1.Puffer fish/1.Swim/1.swim4.png",
    "./assets/img/enemy/1.Puffer fish/1.Swim/1.swim5.png",
  ];
  constructor() {
    super().loadImage("./assets/img/enemy/1.Puffer fish/1.Swim/1.swim1.png");
    this.loadImages(this.IMAGES_PUFFERFISH);
    this.x = 200 + Math.random() * 3600;
    this.y = 50 + Math.random() * 250;
    this.speed = 0.4 + Math.random() * 1;

    this.animate();
  }
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      this.playAnimation(this.IMAGES_PUFFERFISH);
    }, 100);
  }
}
class JellyFish extends MovableObject {
  width = 80;
  height = 80;
  ceilingHeight = 400;
  fishHeight = 0;
  swimDirection = 1;
  IMAGES_JELLYFISH = [
    "./assets/img/enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
    "./assets/img/enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
    "./assets/img/enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
    "./assets/img/enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
  ];
  constructor() {
    super().loadImage(
      "./assets/img/enemy/2 Jelly fish/Súper dangerous/Pink 1.png"
    );
    this.loadImages(this.IMAGES_JELLYFISH);
    this.x = 200 + Math.random() * 3600;
    this.y = 50 + Math.random() * 250;
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
      this.playAnimation(this.IMAGES_JELLYFISH);
    }, 200);
  }
}
