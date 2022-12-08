class Coin extends MovableObject {
    height = 30;
    width = 30;
    x = 38;
    y = 50; 
    IMAGES_COIN = [
        './assets/img/marcadores/1. Coins/1.png',
        './assets/img/marcadores/1. Coins/2.png',
        './assets/img/marcadores/1. Coins/3.png',
        './assets/img/marcadores/1. Coins/4.png'
    ];

    constructor(){
        super();
        this.loadimages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 300);
    }
}

class Bottle extends Coin {
    height = 30;
    width = 30;
    x = 28;
    y = 50; 
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
    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[0]);
        this.loadimages(this.IMAGES_BOTTLE);
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 300);
    }
}