const canvas  = document.querySelector('canvas');


const c = canvas.getContext('2d');
const mouse = {
    x:undefined,
    y:undefined
}

const maxRadius = 40;

const colorArray = [
    "#ffaa33",
    '#99ffaaa',
    '#00ff00',
    '#4411aa',
    '#ff1100'
]

const gravity = 1;
const friction = 0.9;

window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-10;
// window.addEventListener('resize',()=>{
     
//     // init();
// })

//Utility Function
function randomIntFromRange(min, max)
{
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomColor(colors)
{
    return colors[Math.floor(Math.random()* colors.length)];
}

//object
class Ball{
    constructor(x,y,dx,dy,radius,color){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx  = dx;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke()
        c.closePath();
    
    }

    update(){
        if(this.y + this.radius + this.dy>canvas.height){
            this.dy = -this.dy*friction;
        }else{
            this.dy += gravity;
        }

        if(this.x +this.radius +this.dx > canvas.width || this.x -this.radius <= 0)
        {
            this.dx = -this.dx;
        }
        this.y +=this.dy;
        this.x += this.dx;
        this.draw();
    }
}

let ballArray= [];
function init(){

    for(let i =0; i < 1000; i++)
    {
        const radius = randomIntFromRange(8,20);
        let x= randomIntFromRange(radius, canvas.width-radius);
        let y= randomIntFromRange(0, canvas.height-radius);
        let dx = randomIntFromRange(-2,2);
        let dy = randomIntFromRange(-2,2);
        let colors= randomColor(colorArray);
        ballArray.push(new Ball(x,y,dx,dy,radius,colors));
    }
    console.log(ballArray);

}
init();

function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i < ballArray.length; i++)
    {
        ballArray[i].update();
    }
    // ball.update();
}

animate();