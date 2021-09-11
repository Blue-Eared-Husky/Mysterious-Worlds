class Snake{
    constructor(x){
        this.snake = createSprite(x,height-20);
        this.snake.addAnimation("snakes",snakeImg);
        this.snake.scale = 2;
        this.snake.lifetime = 20;

        snakes.push(this.snake);
    }
}