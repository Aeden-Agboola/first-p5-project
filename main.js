function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(100,250);
    
}

function draw(){
    fill("green")
    stroke("green")
    rect(50, 50, 50, 400)
    rect(540, 50, 50, 400)
    rect(50, 50, 500, 50)
    rect(50, 400, 500, 50)
    fill("red")
    stroke("red")
    circle(70, 70, 100)
    circle(560, 70, 100)
    circle(70, 420, 100)
    circle(560, 420, 100)
}