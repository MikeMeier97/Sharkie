class ThrowableObject extends MovableObject {
  height = 50;
  width = 50;
  offset = {
    top: -50,
    left: 0,
    right: 0,
    bottom: -50,
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
