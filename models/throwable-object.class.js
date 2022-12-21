class ThrowableObject extends MovableObject {
  height = 50;
  width = 50;
  offset = {
    top: 100,
    left: 100,
    right: 100,
    bottom: 100,
  };

  constructor(x, y) {
    super().loadImage(
      "./assets/img/sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.x = x + 170;
    this.y = y + 140;
    this.trow();
  }
  trow() {
    this.speedY = 30;
    setInterval(() => {
      this.x += 10;
    }, 5);
  }
}
