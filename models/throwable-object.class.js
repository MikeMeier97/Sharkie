class ThrowableObject extends MovableObject {
    height = 80;
    width = 60;
    IMAGES_BOTTLE = [
        './assets/img/marcadores/Posión/Animada/1.png',
        './assets/img/marcadores/Posión/Animada/2.png',
        './assets/img/marcadores/Posión/Animada/3.png',
        './assets/img/marcadores/Posión/Animada/4.png',
        './assets/img/marcadores/Posión/Animada/5.png',
        './assets/img/marcadores/Posión/Animada/6.png',
        './assets/img/marcadores/Posión/Animada/7.png',
        './assets/img/marcadores/Posión/Animada/8.png'
    ];
    constructor(x, y) {
        super().loadImage(this.IMAGES_BOTTLE[0]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = x + 150; 
        this.y = y + 100;
        this.animate();
        this.trow();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 300);
    }
    trow() {
        this.speedY = 30; 
        setInterval(()=> {
            this.x += 10; 
        }, 5);
    }
}