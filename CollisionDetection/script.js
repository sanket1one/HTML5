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

//function getDistance
function getDistance(x1,y1,x2,y2){
    let xDistance = x2 -x1;
    let yDistance = y2 -y1;

    return Math.sqrt(Math.pow(xDistance,2)+ Math.pow(yDistance,2));
}



//object
class Circle{
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y;
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
        this.draw();
    }
}


//Implementation
let circle1 ;
let circle2;

function init(){
    circle1 = new Circle(300,300,100,'black');
    circle2 = new Circle(undefined,undefined,30,'red');
}
init();

function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,canvas.width,canvas.height);
    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y) <circle1.radius+circle2.radius){
        circle1.color = "red";
    }else{
        circle1.color = "black";
    }
    
}

animate();