class MovableObject {
    imageCache = {};
    x = 50; 
    y = 200;
    img;
    height = 100;
    width = 100;
    currentImage = 0;
    speed = 0.15; 
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
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}