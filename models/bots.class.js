class Bot extends MovableObject{
    constructor() {
        super().loadImage('./assets/img/enemy/1.Puffer fish/1.Swim/1.swim1.png');
        this.x = 200 + Math.random() * 500;
    }
}