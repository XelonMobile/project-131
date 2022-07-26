function preload(){
    img = loadImage('background.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#19cf5e");
    text("Table",  45, 75);
    noFill();
    stroke("#19cf5e");
    rect(200, 60, 350, 350 );
}

img = "";

