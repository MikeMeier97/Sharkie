const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}
class MovableObject extends DrawableObject {
  speed = 0.15;
  energy = 100;
  coinLvl = 0;
  bottleLvl = 0;
  enemy_index = 0;
  lastHit = 0;
  deadTime = 0;
  otherDirection = false;
  world;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };


  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }

  /**
   * playing the animation set by setinterval
   * @param {images} images 
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * checking for alive 
   * @returns false / true 
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * playing animation once // deadAnimatio
   * @param {images} images 
   */
  async playAnimationOnce(images) {
    for (let i = 0; i < images.length; i++) {
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
      await sleep(200);
    }
  }

  /**
   * getting the time of the hit for a 1 second animation
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }


  /**
   * let the time gone for the hit animation 
   * @returns true / false 
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /**
   * stop all interval
   */
  clearAllInterval() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

  /**
   * bot hit and die animation
   * @param {images} img 
   */
  botHit(img){
    this.playAnimationOnce(img);
    this.y -= 10;
  }
}
