class MovableObject {
    imageCache = {};
    x = 50; 
    y = 200;
    img;
    height = 100;
    width = 100;
    currentImage = 0;
    speed = 0.15; 
    energy = 100;
    lastHit = 0; 
    deadTime = 0; 
    otherDirection = false;
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); 
            img.src = path; 
            this.imageCache[path] = img;
        });
    }
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Bot) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }
    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x && 
        this.y < mo.y + mo.height;
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
        this.energy -= 10;
        if(this.energy < 0) {
            this.energy = 0; 
            this.deadTime = new Date().getTime();
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    isDead() {
        return this.energy == 0;
    }
    dead() {
        let timepassed = new Date().getTime() - this.deadTime;
        timepassed = timepassed / 1000; 
        return timepassed < 3; 
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; 
        return timepassed < 3; 
    }
}