class Coin extends MovableObject {
  y;
  x;
  height = 50;
  width = 50;
  IMAGES_COIN = [
    "./assets/img/marcadores/Coins/1.png",
    "./assets/img/marcadores/Coins/2.png",
    "./assets/img/marcadores/Coins/3.png",
    "./assets/img/marcadores/Coins/4.png",
  ];

  constructor(x, y) {
    super().loadImage(this.IMAGES_COIN[0]);
    this.loadImages(this.IMAGES_COIN);
    this.y = y;
    this.x = x;
    this.animate();
  }

  /**
   * animate the coins 
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 300);
  }
}

class Bottle extends Coin {
  height = 80;
  width = 60;
  IMAGES_BOTTLE = [
    "./assets/img/marcadores/Posion/Animada/1.png",
    "./assets/img/marcadores/Posion/Animada/2.png",
    "./assets/img/marcadores/Posion/Animada/3.png",
    "./assets/img/marcadores/Posion/Animada/4.png",
    "./assets/img/marcadores/Posion/Animada/5.png",
    "./assets/img/marcadores/Posion/Animada/6.png",
    "./assets/img/marcadores/Posion/Animada/7.png",
    "./assets/img/marcadores/Posion/Animada/8.png",
  ];
  constructor(x, y) {
    super().loadImage(this.IMAGES_BOTTLE[0]);
    this.loadImages(this.IMAGES_BOTTLE);
    this.x = x;
    this.y = y;
    this.animate();
  }

  /**
   * animate the bottle
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLE);
    }, 300);
  }
}
