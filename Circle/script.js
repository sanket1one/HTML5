const canvas  = document.querySelector('canvas');


const c = canvas.getContext('2d');
const mouse = {
    x:innerWidth/2,
    y:innerHeight/2
}

const maxRadius = 40;

const colorArray = [
    "#ffaa33",
    '#99ffaaa',
    '#00ff00',
    '#4411aa',
    '#ff1100'
]


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
class Particle{
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radian =Math.random()*Math.PI*2;
        this.velocity = 0.05;
        this.distanceFromCenter = randomIntFromRange(50,120);
        this.lastMouse  = {x:x,y:y}
    }

    draw(lastPoint){
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x,lastPoint.y);
        c.lineTo(this.x,this.y);
        c.stroke();
        c.closePath();
    
    }

    update(){
        //move point over time
        const lastPoint = {x:this.x,y:this.y}

        this.radian += this.velocity;

        this.lastMouse += {mouse.x -this.lastMouse.x}*0.05
        this.x = mouse.x + Math.cos(this.radian)*this.distanceFromCenter;
        this.y = mouse.y + Math.sin(this.radian)*this.distanceFromCenter;
        this.draw(lastPoint);
    }
}
let particles;
function init()
{
    particles = []    
    for(let i = 0; i<100;i++)
    {
        const radius = (Math.random()*2) +1;
        particles.push(new Particle(innerWidth/2 ,innerHeight/2,10,randomColor(colorArray)));

    }
    console.log(particles)

}
init();    
//clear Rect clear the frame each time
//fillRect 
function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255,0.05)'
    c.fillRect(0,0,canvas.width,canvas.height);
    particles.forEach(particle => {
        particle.update();
    })

}

animate();