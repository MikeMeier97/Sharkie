class Bottlebar extends DrawableObject {
  IMAGES_BOTTLEBAR = [
    "./assets/img/marcadores/Purple/0_.png",
    "./assets/img/marcadores/Purple/20_.png",
    "./assets/img/marcadores/Purple/40_.png",
    "./assets/img/marcadores/Purple/60_.png",
    "./assets/img/marcadores/Purple/80_.png",
    "./assets/img/marcadores/Purple/100_.png",
  ];
  percentage = 0;

  constructor() {
    super().loadImages(this.IMAGES_BOTTLEBAR);
    this.x = 20;
    this.y = 10;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0); // set initial position
  }
  /**
   * set percentage für statusbar 
   * @param {number} percentage 
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * determines the value of filling 
   * @returns index of statusbar filling
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
