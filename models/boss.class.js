class Endboss extends MovableObject {
  height = 300;
  width = 300;
  energy = 100;
  boss_spawned = false;
  indexTimeOut = 0; 
  timeOut = true; 
  isDead = false;
  IMAGES_BOSS_INTRO = [
    "./assets/img/enemy/Boss/Introduce/1.png",
    "./assets/img/enemy/Boss/Introduce/2.png",
    "./assets/img/enemy/Boss/Introduce/3.png",
    "./assets/img/enemy/Boss/Introduce/4.png",
    "./assets/img/enemy/Boss/Introduce/5.png",
    "./assets/img/enemy/Boss/Introduce/6.png",
    "./assets/img/enemy/Boss/Introduce/7.png",
    "./assets/img/enemy/Boss/Introduce/8.png",
    "./assets/img/enemy/Boss/Introduce/9.png",
    "./assets/img/enemy/Boss/Introduce/10.png",
  ];
  IMAGES_BOSS_BITE = [
    "./assets/img/enemy/Boss/Attack/1.png",
    "./assets/img/enemy/Boss/Attack/2.png",
    "./assets/img/enemy/Boss/Attack/3.png",
    "./assets/img/enemy/Boss/Attack/4.png",
    "./assets/img/enemy/Boss/Attack/5.png",
    "./assets/img/enemy/Boss/Attack/6.png",
  ];
  IMAGES_BOSS_SWIM = [
    "./assets/img/enemy/Boss/floating/1.png",
    "./assets/img/enemy/Boss/floating/2.png",
    "./assets/img/enemy/Boss/floating/3.png",
    "./assets/img/enemy/Boss/floating/4.png",
    "./assets/img/enemy/Boss/floating/5.png",
    "./assets/img/enemy/Boss/floating/6.png",
    "./assets/img/enemy/Boss/floating/7.png",
    "./assets/img/enemy/Boss/floating/8.png",
    "./assets/img/enemy/Boss/floating/9.png",
    "./assets/img/enemy/Boss/floating/10.png",
    "./assets/img/enemy/Boss/floating/11.png",
    "./assets/img/enemy/Boss/floating/12.png",
    "./assets/img/enemy/Boss/floating/13.png",

  ];
  IMAGES_BOSS_RIP = [
    "./assets/img/enemy/Boss/Dead/6.png",
    "./assets/img/enemy/Boss/Dead/7.png",
    "./assets/img/enemy/Boss/Dead/8.png",
    "./assets/img/enemy/Boss/Dead/9.png",
    "./assets/img/enemy/Boss/Dead/10.png",
  ];
  IMAGES_BOSS_HURT = [
    "./assets/img/enemy/Boss/Hurt/1.png",
    "./assets/img/enemy/Boss/Hurt/2.png",
    "./assets/img/enemy/Boss/Hurt/3.png",
    "./assets/img/enemy/Boss/Hurt/4.png",
  ];
  boss_audio_spawn = new Audio("./audio/boss-splash.mp3");
  boss_background_music = new Audio("./audio/boss-music.mp3");
  boss_bite_sound = new Audio("./audio/boss-bite.mp3");
  win_sound = new Audio("./audio/win.mp3");

  constructor(x, y, id) {
    super().loadImage(this.IMAGES_BOSS_INTRO[0]);
    this.loadImages(this.IMAGES_BOSS_SWIM);
    this.loadImages(this.IMAGES_BOSS_INTRO);
    this.loadImages(this.IMAGES_BOSS_RIP);
    this.loadImages(this.IMAGES_BOSS_HURT);
    this.loadImages(this.IMAGES_BOSS_BITE);
    this.resetTimeOut(); 
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
        if (this.world.character.x > 3200) {
          this.boss_spawned = true;
        }
        if (this.boss_spawned) {
          this.world.background_music.pause();
          if (i < 10) {
            this.boss_audio_spawn.play();
            this.playAnimation(this.IMAGES_BOSS_INTRO);
          } else if (this.energy <= 0) {
            this.winGame();
          } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_BOSS_HURT);
          } else if(!this.timeOut){
            this.playAnimation(this.IMAGES_BOSS_BITE);
            this.boss_bite_sound.play();
            this.indexTimeOut++; 
            if(this.indexTimeOut == 6) {
              this.timeOut = true;
            }
          } else if(this.indexTimeOut >= 6){
            this.boss_audio_spawn.pause();
            this.x -= 10;
            this.playAnimation(this.IMAGES_BOSS_SWIM);
            if(!this.world.mute){
              this.boss_background_music.play();
            }
          }
          i++;
        }
      }, 150);
    }, 1000);
  }
  resetTimeOut() {
    setInterval(() => {
      this.timeOut = false;
      this.indexTimeOut = 0;  
    }, 5000);
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
    if (!this.isDead) {
      this.playAnimationOnce(this.IMAGES_BOSS_RIP);
      setTimeout(() => {
        this.boss_background_music.pause();
        this.clearAllInterval();
        this.loadWinScreen();
        this.win_sound.play();
      }, 2500);
      this.isDead = true;
    }
  }
}
