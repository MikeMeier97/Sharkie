class Keyboard {
  lEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;
  constructor() {
    this.bindBtsPressEvents();
  }

  bindBtsPressEvents() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.LEFT = true;
    });
    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.LEFT = false;
    });
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.RIGHT = true;
    });
    document.getElementById('btnRight').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.RIGHT = false;
    });    
    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.UP = true;
    });
    document.getElementById('btnUp').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.UP = false;
    });    
    document.getElementById('btnDown').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.DOWN = true;
    });
    document.getElementById('btnDown').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.DOWN = false;
    });
    document.getElementById('btnShoot').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.D = true;
    });
    document.getElementById('btnShoot').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.D = false;
    });
  }
}
