class Endboss extends MovableObject {
    IMAGES_SWIM = [
        './assets/img/enemy/3 Final Enemy/2.floating/1.png',
        './assets/img/enemy/3 Final Enemy/2.floating/2.png',
        './assets/img/enemy/3 Final Enemy/2.floating/3.png',
        './assets/img/enemy/3 Final Enemy/2.floating/4.png',
        './assets/img/enemy/3 Final Enemy/2.floating/5.png',
        './assets/img/enemy/3 Final Enemy/2.floating/6.png',
        './assets/img/enemy/3 Final Enemy/2.floating/7.png',
        './assets/img/enemy/3 Final Enemy/2.floating/8.png',
        './assets/img/enemy/3 Final Enemy/2.floating/9.png',
        './assets/img/enemy/3 Final Enemy/2.floating/10.png',
        './assets/img/enemy/3 Final Enemy/2.floating/11.png',
        './assets/img/enemy/3 Final Enemy/2.floating/12.png',
        './assets/img/enemy/3 Final Enemy/2.floating/13.png'
    ];
    constructor() {
        super().loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.x = 3850; 
        this.y = 50;
        this.height = 300;
        this.width = 300; 
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 300);
    }
}