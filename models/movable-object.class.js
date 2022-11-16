class MovableObject {
    x = 2; 
    y = 2;
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