class Statusbar extends DrawableObject {
  IMAGES_HEALTH = [
    "./assets/img/marcadores/Purple/health_0.png",
    "./assets/img/marcadores/Purple/health_1.png",
    "./assets/img/marcadores/Purple/health_2.png",
    "./assets/img/marcadores/Purple/health_3.png",
    "./assets/img/marcadores/Purple/health_4.png",
    "./assets/img/marcadores/Purple/health_5.png",
  ];

  percentage = 100;
  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.x = 20;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100); // set initial position
  }

  /**
   * get the image of percent for the statusbar 
   * @param {number} percentage 
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }


  /**
   * get the index 
   * @returns index of fill 
   */
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
