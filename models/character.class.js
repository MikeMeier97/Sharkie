class Character extends MovableObject {
  height = 250;
  width = 250;
  y = 100;
  AFK = false; 
  currentIdle = 0; 
  speed = 9;
  timeOut = 0; 
  offset = {
    top: 160,
    left: 0,
    right: 80,
    bottom: 60,
  };
  IMAGES_SHOOT = [
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/1.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/2.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/3.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/4.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/5.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/6.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/7.png",
    "./assets/img/sharkie/4.Attack/BubbleTrap/For Whale/8.png",
  ];
  IMAGES_IDLE = [
    "./assets/img/sharkie/1.IDLE/1.png",
    "./assets/img/sharkie/1.IDLE/3.png",
    "./assets/img/sharkie/1.IDLE/2.png",
    "./assets/img/sharkie/1.IDLE/4.png",
    "./assets/img/sharkie/1.IDLE/5.png",
    "./assets/img/sharkie/1.IDLE/6.png",
    "./assets/img/sharkie/1.IDLE/7.png",
    "./assets/img/sharkie/1.IDLE/8.png",
    "./assets/img/sharkie/1.IDLE/9.png",
    "./assets/img/sharkie/1.IDLE/10.png",
    "./assets/img/sharkie/1.IDLE/11.png",
    "./assets/img/sharkie/1.IDLE/12.png",
    "./assets/img/sharkie/1.IDLE/13.png",
    "./assets/img/sharkie/1.IDLE/14.png",
    "./assets/img/sharkie/1.IDLE/15.png",
    "./assets/img/sharkie/1.IDLE/16.png",
    "./assets/img/sharkie/1.IDLE/17.png",
    "./assets/img/sharkie/1.IDLE/18.png",
  ];
  IMAGES_LONG_IDLE = [
    "./assets/img/sharkie/2.Long_IDLE/i1.png",
    "./assets/img/sharkie/2.Long_IDLE/i2.png",
    "./assets/img/sharkie/2.Long_IDLE/i3.png",
    "./assets/img/sharkie/2.Long_IDLE/i4.png",
    "./assets/img/sharkie/2.Long_IDLE/i5.png",
    "./assets/img/sharkie/2.Long_IDLE/i6.png",
    "./assets/img/sharkie/2.Long_IDLE/i7.png",
    "./assets/img/sharkie/2.Long_IDLE/i8.png",
    "./assets/img/sharkie/2.Long_IDLE/i9.png",
    "./assets/img/sharkie/2.Long_IDLE/i10.png",
    "./assets/img/sharkie/2.Long_IDLE/i11.png",
    "./assets/img/sharkie/2.Long_IDLE/i12.png",
    "./assets/img/sharkie/2.Long_IDLE/i13.png",
    "./assets/img/sharkie/2.Long_IDLE/i14.png",
  ];
  IMAGES_IDLE_ZZZ = [
    "./assets/img/sharkie/2.Long_IDLE/i11.png",
    "./assets/img/sharkie/2.Long_IDLE/i12.png",
    "./assets/img/sharkie/2.Long_IDLE/i13.png",
    "./assets/img/sharkie/2.Long_IDLE/i14.png",
  ];
  IMAGES_SWIM = [
    "./assets/img/sharkie/3.Swim/1.png",
    "./assets/img/sharkie/3.Swim/2.png",
    "./assets/img/sharkie/3.Swim/3.png",
    "./assets/img/sharkie/3.Swim/4.png",
    "./assets/img/sharkie/3.Swim/5.png",
    "./assets/img/sharkie/3.Swim/6.png",
  ];
  IMAGES_DEAD = [
    "./assets/img/sharkie/6.dead/1.Poisoned/1.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/2.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/3.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/4.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/5.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/6.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/7.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/8.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/9.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/10.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/11.png",
    "./assets/img/sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_HURT = [
    "./assets/img/sharkie/5.Hurt/1.Poisoned/2.png",
    "./assets/img/sharkie/5.Hurt/1.Poisoned/3.png",
    "./assets/img/sharkie/5.Hurt/1.Poisoned/4.png",
    "./assets/img/sharkie/5.Hurt/1.Poisoned/5.png",
  ];
  walking_sound = new Audio("./audio/jump.wav");
  hurt_sound = new Audio("./audio/small-hit.wav");
  dead_sound = new Audio("./audio/dead-sound.mp3");
  bubble_sound = new Audio("./audio/bubble-pop.wav");

  constructor() {
    super().loadImage("./assets/img/sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_SHOOT);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveAnimate();
    }, 1000 / 60);
    setInterval(() => {
      this.hurt_sound.pause();
      this.bubble_sound.pause();
      if (this.isDead()) {
        this.gameOver();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.hurt_sound.play();
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.DOWN ||
        this.world.keyboard.UP
      ) {
        this.playAnimation(this.IMAGES_SWIM);
        this.timeOut = 0; 
        this.currentIdle = 0;
      } else if (this.world.keyboard.D && this.bottleLvl > 0) {
        this.timeOut = 0; 
        this.bubble_sound.play();
      } else {
        this.timeOut++;
        if(this.timeOut >= 30) {
          this.playAnimation(this.IMAGES_LONG_IDLE);
          this.currentIdle++; 
          if(this.currentIdle > 10) {
            this.playAnimation(this.IMAGES_IDLE_ZZZ);
          }
        } else {
          this.playAnimation(this.IMAGES_IDLE);
        }
      }
    }, 200);
  }
  gameOver() {
    this.playAnimationOnce(this.IMAGES_DEAD);
    this.dead_sound.play();
    setTimeout(() => {
      this.loadGameOverScreen();
      this.clearAllInterval();
      removeIcons();  
    }, 3000);
  }
  moveAnimate() {
    this.walking_sound.pause();
    if (
      this.world.keyboard.RIGHT &&
      this.x < this.world.level.level_end_x &&
      !this.isDead()
    ) {
      this.moveRight();
      this.otherDirection = false;
      this.walking_sound.play();
    }
    if (this.world.keyboard.LEFT && this.x > 0 && !this.isDead()) {
      this.moveLeft();
      this.otherDirection = true;
      this.walking_sound.play();
    }
    if (this.world.keyboard.UP && this.y > -100 && !this.isDead()) {
      this.moveUp();
      this.walking_sound.play();
    }
    if (this.world.keyboard.DOWN && this.y < 280 && !this.isDead()) {
      this.moveDown();
      this.walking_sound.play();
    }
    this.world.camera_x = -this.x - 10;
  }
}
