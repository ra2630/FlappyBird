var canvasHeight = 600;
var canvasWidth = 500;

var bird;
var upcomingPipes = [];
var passedPipes = [];

var frameCounter = 0;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	bird = new Bird();
}

function draw() {
	background(0);

	if(frameCounter % 50 == 0)
		upcomingPipes.push(new Pipe());

	for(var i=0;i<upcomingPipes.length; i++){
		upcomingPipes[i].show();
		upcomingPipes[i].update();

		if(upcomingPipes[i].hits(bird)){
			console.log("HIT");
		}
		if(upcomingPipes[i].passedBird(bird.x)){
			var p = upcomingPipes.splice(i,1)[0];
			p.color = [0,255,0];
			passedPipes.push(p);
		}
	}

	for(var i=0;i<passedPipes.length; i++){
		passedPipes[i].show();
		passedPipes[i].update();
		if(passedPipes[i].offScreen()) {
			passedPipes.splice(i,1);
		}
	}

	bird.show();
	bird.update();
	bird.reset();



	frameCounter++;
}

function keyPressed() {
		if(key == ' '){
			bird.flap();
		}
	}