const canvas  = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');
// c.fillRect(x,y,width,height);
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(100,100,100,100);


//line
c.beginPath();
c.moveTo(50,300);   //pointing the starting point
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "black";
c.stroke()


class Circle{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fill();
    
    }

    update(){
        if(this.x+this.radius> innerWidth || this.x-this.radius <0)
        {
            this.dx=-this.dx;
        }
        if(this.y+this.radius> innerHeight || this.y-this.radius <0)
        {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+= this.dy;

        this.draw();
    }
}


let circleArray = []
for(let i = 0; i< 100;i++)
{
    let radius = 30;
    let x = Math.random()*(innerWidth - radius*2) + radius;
    let y = Math.random()*(innerHeight -radius*2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    
    circleArray.push(new Circle(x,y,dx,dy,radius));
    console.log(circleArray)
}

//Arc Circle


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)// clear the canvas each time when refreshing the frame

  
    for(let i  = 0; i < circleArray.length;i++)
    {
        circleArray[i].update();
    }

}

animate();