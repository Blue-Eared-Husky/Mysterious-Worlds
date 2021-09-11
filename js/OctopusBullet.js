class OctopusBullet{
    constructor(x){
        this.bullet = createSprite(x,height-10,10,10);
        this.bullet.addAnimation("bullet",octopusBulletImg);
        this.bullet.velocityY = -10;
        this.bullet.lifetime = 5000;
        this.bullet.scale = 2;
        this.bullet.setCollider("circle",0,0,2.5);

        octopusBullets.push(this.bullet);
        enemies.push(this.bullet);
        bulletmus.play();
    }
}