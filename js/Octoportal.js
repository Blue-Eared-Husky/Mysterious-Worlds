class Octoportal{
    constructor(x){
        this.portal = createSprite(x,height-10);
        this.portal.addImage(octopusPortal);
        this.portal.scale = 2;
        this.portal.lifetime = 1000;
    }
}