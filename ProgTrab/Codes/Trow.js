class Trow{
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.baseImg = loadImage("Imgs/Base.png");
        this.trowImg = loadImage("Imgs/Throw.png");
      }
    display() {
        if (keyIsDown(DOWN_ARROW) && this.angle<-180){
            this.angle += 5;
            }
        if (keyIsDown(UP_ARROW) && this.angle>90){
            this.angle -= 5;
            }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.trowImg, 2.5, 0, 30, 20);
        pop();
        image(this.baseImg, 20, 260, 60, 40);
        noFill();
    }
}