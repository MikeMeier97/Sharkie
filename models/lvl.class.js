class Level {
    enemies; 
    backgroundObjects;
    coins;
    level_end_x = 3500;
    constructor(enemies, backgroundObjects, coins) {
        this.enemies = enemies; 
        this.coins = coins;
        this.backgroundObjects = backgroundObjects; 
    }
}