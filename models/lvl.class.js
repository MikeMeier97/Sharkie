class Level {
    enemies; 
    backgroundObjects;
    coins;
    bottle;
    level_end_x = 3500;
    constructor(enemies, backgroundObjects, coins, bottle) {
        this.enemies = enemies; 
        this.coins = coins;
        this.bottle = bottle; 
        this.backgroundObjects = backgroundObjects; 
    }
}