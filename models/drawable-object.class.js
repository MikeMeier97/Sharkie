class DrawableObject {
  x = 50;
  y = 200;
  height = 100;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * draw image on canvas
   * @param {2d} ctx
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * load the images
   * @param {images} arr
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * draw the frame to check the hitbox
   * @param {2d} ctx
   */
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof PufferFish) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "transparent";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  /**
   * template the gameover screen
   */
  loadGameOverScreen() {
    document.getElementById("gameContext").innerHTML = ``;
    document.getElementById("gameContext").innerHTML = `
    <div class="gameOver">
        <img class="gameOverTitle" src="./assets/img/botones/Tittles/GameOver/9.png">
        <img class="tryAgainIcon" onclick="window.location.reload();" src="./assets/img/botones/TryAgain/1.png">
    </div>`;
  }

  /**
   * template the win screen
   */
  loadWinScreen() {
    removeIcons();
    document.getElementById("gameContext").innerHTML = ``;
    document.getElementById("gameContext").innerHTML = `
    <img class="winscreen" src="assets/img/botones/Tittles/YouWin/1.png">
    <img class="tryAgainIconwin" onclick="window.location.reload();" src="./assets/img/botones/TryAgain/1.png">
    `;
  }
}
