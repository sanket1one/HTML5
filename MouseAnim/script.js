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

window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
     
    init();
})

class Circle{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius= radius;
        this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    }

    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
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

        //interativity
        if(mouse.x - this.x < 50 && mouse.x -this.x >-50
            && mouse.y -this.y<50 &&mouse.y -this.y>-50) 
        {
            if(this.radius<maxRadius) {
                this.radius += 1;
            }
        }else if(this.radius > this.minRadius) {
            this.radius -=1;
        }

        this.draw();
    }
}




let circleArray = []
function init(){
    circleArray = [];
    for(let i = 0; i< 400;i++)
    {
        let radius = Math.random() *3 + 1;
        let x = Math.random()*(innerWidth - radius*2) + radius;
        let y = Math.random()*(innerHeight -radius*2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}
init();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)// clear the canvas each time when refreshing the frame

  
    for(let i  = 0; i < circleArray.length;i++)
    {
        circleArray[i].update();
    }

}

animate();