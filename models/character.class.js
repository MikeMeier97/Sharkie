class Character extends MovableObject{
    height = 250;
    width = 250;
    y = 100;
    speed = 7;
    IMAGES_IDLE = [
        './assets/img/sharkie/1.IDLE/1.png',
        './assets/img/sharkie/1.IDLE/3.png',
        './assets/img/sharkie/1.IDLE/2.png',
        './assets/img/sharkie/1.IDLE/4.png',
        './assets/img/sharkie/1.IDLE/5.png',
        './assets/img/sharkie/1.IDLE/6.png',
        './assets/img/sharkie/1.IDLE/7.png',
        './assets/img/sharkie/1.IDLE/8.png',
        './assets/img/sharkie/1.IDLE/9.png',
        './assets/img/sharkie/1.IDLE/10.png',
        './assets/img/sharkie/1.IDLE/11.png',
        './assets/img/sharkie/1.IDLE/12.png',
        './assets/img/sharkie/1.IDLE/13.png',
        './assets/img/sharkie/1.IDLE/14.png',
        './assets/img/sharkie/1.IDLE/15.png',
        './assets/img/sharkie/1.IDLE/16.png',
        './assets/img/sharkie/1.IDLE/17.png',
        './assets/img/sharkie/1.IDLE/18.png'
    ];
    IMAGES_SWIM = [
        './assets/img/sharkie/3.Swim/1.png',
        './assets/img/sharkie/3.Swim/2.png',
        './assets/img/sharkie/3.Swim/3.png',
        './assets/img/sharkie/3.Swim/4.png',
        './assets/img/sharkie/3.Swim/5.png',
        './assets/img/sharkie/3.Swim/6.png'
    ];
    IMAGES_DEAD = [
        './assets/img/sharkie/6.dead/1.Poisoned/1.png',
        './assets/img/sharkie/6.dead/1.Poisoned/2.png',
        './assets/img/sharkie/6.dead/1.Poisoned/3.png',
        './assets/img/sharkie/6.dead/1.Poisoned/4.png',
        './assets/img/sharkie/6.dead/1.Poisoned/5.png',
        './assets/img/sharkie/6.dead/1.Poisoned/6.png',
        './assets/img/sharkie/6.dead/1.Poisoned/7.png',
        './assets/img/sharkie/6.dead/1.Poisoned/8.png',
        './assets/img/sharkie/6.dead/1.Poisoned/9.png',
        './assets/img/sharkie/6.dead/1.Poisoned/10.png',
        './assets/img/sharkie/6.dead/1.Poisoned/11.png',
        './assets/img/sharkie/6.dead/1.Poisoned/12.png'
    ];
    IMAGES_HURT = [
        './assets/img/sharkie/5.Hurt/1.Poisoned/2.png',
        './assets/img/sharkie/5.Hurt/1.Poisoned/3.png',
        './assets/img/sharkie/5.Hurt/1.Poisoned/4.png',
        './assets/img/sharkie/5.Hurt/1.Poisoned/5.png',
    ];
    world;
    walking_sound = new Audio('./audio/swim.mp3');
    constructor() {
        super().loadImage('./assets/img/sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE); 
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD); 
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){ 
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x > 0){ 
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if(this.world.keyboard.UP && this.y > -100){ 
                this.moveUp();
                this.walking_sound.play();
            }
            if(this.world.keyboard.DOWN && this.y < 280){ 
                this.moveDown();
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x - 10;
        }, 1000 / 60);
        setInterval(() => {
            if(this.dead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.DOWN || this.world.keyboard.UP){
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 200);
        }
}