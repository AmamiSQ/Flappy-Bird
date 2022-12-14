class Bird
{
    constructor()
    {
        this.height = 100;
        this.width = 100;
        
        this.posX = 200;
        this.posY = 300;

        this.hitX;
        this.hitY;
        this.hitYTop;

        this.dead = false;
        this.onGround = false;

        //gravity params
        this.mass = 2;
        this.accel = this.mass*0.1;
        this.velocity = 0;

        this.jumpForce = 8;
        this.score = 0;
    }

    gravity()
    {
        this.velocity+= this.accel;
        this.posY+= this.velocity;
    } 

    flap()
    {
        this.velocity-= this.jumpForce;
    }

    scoreCount(condition)
    {
        if(condition){
            this.score++;
        }
    }

    death()
    {
        if(!this.onGround){
            this.velocity = 2;
            this.posY = constrain(this.posY, 0, ground);
            this.velocity = 10;
        }

        //game over screen
        console.log(this.score);
    }
}