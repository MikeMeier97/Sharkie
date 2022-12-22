class Endboss extends MovableObject {
  height = 300;
  width = 300;
  energy = 100;
  offset = {
    top: -100,
    left: 10,
    right: 10,
    bottom: -100,
  };
  IMAGES_BOSS_INTRO = [
    "./assets/img/enemy/3 Final Enemy/1.Introduce/1.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/2.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/3.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/4.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/5.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/6.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/7.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/8.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/9.png",
    "./assets/img/enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMAGES_BOSS_SWIM = [
    "./assets/img/enemy/3 Final Enemy/2.floating/1.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/2.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/3.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/4.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/5.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/6.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/7.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/8.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/9.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/10.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/11.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/12.png",
    "./assets/img/enemy/3 Final Enemy/2.floating/13.png",
  ];
  IMAGES_BOSS_RIP = [
    './assets/img/enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
    './assets/img/enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
    './assets/img/enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
    './assets/img/enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
    './assets/img/enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
  ];
  boss_audio_spawn = new Audio('./audio/boss-splash.mp3');
  boss_background_music = new Audio('./audio/boss-music.mp3');
  constructor(x, y, id) {
    super().loadImage(this.IMAGES_BOSS_INTRO[0]);
    this.loadImages(this.IMAGES_BOSS_SWIM);
    this.loadImages(this.IMAGES_BOSS_INTRO);
    this.loadImages(this.IMAGES_BOSS_RIP);
    this.x = x; 
    this.y = y;
    this.id = id;  
    setTimeout(() => {
      this.animate();
    }, 4000);
  }
  animate() {
    let i = 0;
    setTimeout(() => {
    setInterval(() => {
      if(this.world.character.x > 3300) {
          this.world.background_music.pause();
        if (i < 10) {
          this.boss_audio_spawn.play();
          this.playAnimation(this.IMAGES_BOSS_INTRO);
        } else if (this.energy <= 0) {
          this.winGame();
        } else {
          this.boss_audio_spawn.pause();
          this.boss_background_music.play();
          this.playAnimation(this.IMAGES_BOSS_SWIM);
        }
        i++;
      }
    }, 150);
  }, 1000);
  }
  bossAudio() {
    setTimeout(() => {
      this.boss_audio_spawn.play();
    }, 200);
    this.boss_audio_spawn.pause();
    setTimeout(() => {
      this.boss_background_music.play();
    }, 1000);
  }
  winGame() {
    this.playAnimation(this.IMAGES_BOSS_RIP);
      setTimeout(() => {
        this.clearAllInterval();
        this.loadWinScreen();
      }, 500);
    }
}