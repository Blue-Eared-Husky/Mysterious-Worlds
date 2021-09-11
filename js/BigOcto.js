class BigOcto{
    constructor(){
        this.bigocto = createSprite(width/2,height-50);
        this.bigocto.addAnimation("octo",octopusImg);
        this.bigocto.scale = 2;
        this.health = 40;
        boss = this.bigocto;
        enemies.push(this.bigocto);
    }
}