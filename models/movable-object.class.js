class MovableObject extends DrawableObject {
    speed = 0.15; 
    energy = 100;
    lastHit = 0; 
    deadTime = 0; 
    otherDirection = false;

    isColliding(mo) {
        return this.x + this.width - 20 > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x && 
        this.y < mo.y + mo.height - 140;
    }
    moveLeft() {
        this.x -= this.speed;
    }
    moveRight() {
        this.x += this.speed;
    }
    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
    }
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    hit() { 
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0; 
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    isDead() {
        return this.energy == 0;
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; 
        return timepassed < 3; 
    }
}