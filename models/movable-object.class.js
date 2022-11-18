class MovableObject {
    x = 50; 
    y = 300;
    img;
    height = 100;
    width = 100;
    moveRight() {

    }
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
}