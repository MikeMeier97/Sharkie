class Coinbar extends DrawableObject {
  IMAGES_COINBAR = [
    "./assets/img/marcadores/Purple/coin_1.png",
    "./assets/img/marcadores/Purple/coin_2.png",
    "./assets/img/marcadores/Purple/coin_3.png",
    "./assets/img/marcadores/Purple/coin_4.png",
    "./assets/img/marcadores/Purple/coin_5.png",
    "./assets/img/marcadores/Purple/coin_6.png",
  ];

  percentage = 0;
  constructor() {
    super().loadImages(this.IMAGES_COINBAR);
    this.x = 20;
    this.y = 90;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0);
  }
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
