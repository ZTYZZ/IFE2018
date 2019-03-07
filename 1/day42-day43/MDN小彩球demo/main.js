var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


function random(min,max) {
    return Math.floor(Math.random()*(max-min)) + min;
}

function randomColor() {
    return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
}


function Ball(x,y,velx,vely,color,size) {
    this.x = x;
    this.y = y;
    this.velx = velx;
    this.vely = vely;
    this.color = color;
    this.size = size;
}
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
};

Ball.prototype.update = function() {
    //碰到边界
    if(this.x + this.size >= width) {
        this.velx = -(this.velx);
    }

    if((this.x - this.size) <= 0) {
        this.velx = -(this.velx);
    }

    if((this.y + this.size) >= height) {
        this.vely = -(this.vely);
    }

    if((this.y - this.size)<=0) {
        this.vely = -(this.vely);
    }

    this.x += this.velx;
    this.y +=this.vely;
};

Ball.prototype.collisionDetect = function() {
    for(var j = 0;j<balls.length;j++) {
        if(!(this === balls[j])) {
            var dx = this.x-balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx*dx + dy*dy);

            if(distance < this.size +balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }

    }
};
var balls = [];
function loop() {
    ctx.fillStyle="rgba(0,0,0,25)";
    ctx.fillRect(0,0,width,height);

    while(balls.length < 60) {
        var ball = new Ball(
            random(0,width),
            random(0,height),
            random(-7,7),
            random(-7,7),
            randomColor(),
            5
        );

        balls.push(ball);

    }

    for(var i = 0;i<balls.length;i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();

    }
    requestAnimationFrame(loop);

}




loop();