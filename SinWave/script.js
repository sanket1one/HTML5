// const gui = new dat.GUI();
const canvas  = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
    y:canvas.height/2,
    length:0.01,
    amplitude: 100,
    frequency:0.01
}

const strokeColor ={
    h:200,
    s:50,
    l:50
}

const backgroundColor = {
    r:0,
    g:0,
    b:0,
    a:0.01
}

// const waveFolder = gui.addFolder('wave')
// waveFolder.add(wave,'y',0,canvas.height);
// waveFolder.add(wave,'length',-0.01,0.01);
// waveFolder.add(wave,'amplitude',-300,300);
// waveFolder.add(wave,'frequency',-0.01,1);
// waveFolder.open();

// const strokeFolder = gui.addFolder('strokeFolder');
// strokeFolder.add(strokeColor,'h',0,255);
// strokeFolder.add(strokeColor,'s',0,100);
// strokeFolder.add(strokeColor,'l',0,100)
// strokeFolder.open();

// const backgroundFolder = gui.addFolder('backgroundColor');
// backgroundFolder.add(backgroundColor,'r',0,255);
// backgroundFolder.add(backgroundColor,'g',0,255);
// backgroundFolder.add(backgroundColor,'b',0,255)
// backgroundFolder.add(backgroundColor,'a',0,1)




// c.beginPath();

// c.moveTo(0, canvas.height/2);
// // c.lineTo(3,canvas.height/2) //(x,y) coordinate of last point

// for(let i = 0; i < canvas.width; i++)
// {
//     c.lineTo(i,canvas.height/2+Math.sin(i*0.01) * 200);

// }
// c.stroke();

// let increment = wave.frequency;
let increment = 0.05;
function animate()
{
    requestAnimationFrame(animate);
    c.fillStyle= 'rgba(0,0,0,0.01)'
    c.fillRect(0,0,canvas.width,canvas.height)
    c.beginPath();

    c.moveTo(0, canvas.height/2);
    // c.lineTo(3,canvas.height/2) //(x,y) coordinate of last point

    for(let i = 0; i < canvas.width; i++)
    {
        c.lineTo(i,canvas.height/2+Math.sin(i*0.01+increment)* 200*Math.sin(increment));
        // c.lineTO(i,i)

    }
    console.log("hi")
    c.strokeStyle = 'red';
    c.stroke();
    increment += 0.01;

}

animate();