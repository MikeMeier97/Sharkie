class Endboss extends MovableObject {
  height = 300;
  width = 300;
  x = 3850;
  y = 50;

  IMAGES_BOSS_SWIM = [
    "./assets/img/enemy/3 Final Enemy/2.floating/1.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/2.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/3.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/4.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/5.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/6.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/7.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/8.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/9.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/10.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/11.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/12.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/13.png",
  ];
  constructor() {
    super().loadImage(this.IMAGES_BOSS_SWIM[0]);
    this.loadImages(this.IMAGES_BOSS_SWIM);
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOSS_SWIM);
    }, 300);
  }
}
