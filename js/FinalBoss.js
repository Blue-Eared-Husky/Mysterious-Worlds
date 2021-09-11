class FinalBoss{
    constructor(){
        this.medusa = createSprite(width/2,height-30);
        this.medusa.addAnimation("medusa",finalbossImg);
        this.medusa.scale = 2;
        this.health = 50;
        boss = this.medusa;
        enemies.push(this.medusa);
    }
}