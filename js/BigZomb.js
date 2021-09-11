class BigZomb{
    constructor(){
        this.zombie = createSprite(width/2,30);
        this.zombie.addImage(zombImg);
        this.zombie.scale = 2;
        this.health = 30;

        boss = this.zombie;
        enemies.push(this.zombie);
    }
}