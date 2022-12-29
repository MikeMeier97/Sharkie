class ThrowableObject extends MovableObject {
  height = 50;
  width = 50;

  constructor(x, y) {
    super().loadImage(
      "./assets/img/sharkie/4.Attack/BubbleTrap/Bubble.png"
    );
    this.x = x + 170;
    this.y = y + 140;
    this.trow();
  }

  /**
   * the speed of the shoot bubble  
   */
  trow() {
    this.speedY = 30; 
    setInterval(() => {
      this.x += 10;
    }, 5);
  }
}
