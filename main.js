function preload() {

}

function setup() {
canvas=createCanvas(200,334);
canvas.position(300,100);
video=createCapture(VIDEO);
video.hide();
}

function draw() {
image(video,0,0,200,334);
}

function take_snapshot() {
save("image.jpg");
}