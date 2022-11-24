class Bot extends MovableObject{
    width = 80; 
    height = 80;
    IMAGES_SWIM = [
       './assets/img/enemy/1.Puffer fish/1.Swim/1.swim1.png',
       './assets/img/enemy/1.Puffer fish/1.Swim/1.swim2.png',
       './assets/img/enemy/1.Puffer fish/1.Swim/1.swim3.png',
       './assets/img/enemy/1.Puffer fish/1.Swim/1.swim4.png',
       './assets/img/enemy/1.Puffer fish/1.Swim/1.swim5.png'
    ]
    constructor() {
        super().loadImage('./assets/img/enemy/1.Puffer fish/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 200 + Math.random() * 500;
        this.y = 50 + Math.random() * 250;
        this.speed = 0.4 + Math.random() * 0.25; 

        this.animate();
    }
    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}