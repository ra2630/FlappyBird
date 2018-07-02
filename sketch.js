var canvasHeight = 600;
var canvasWidth = 500;

var bird;
var upcomingPipes = [];
var passedPipes = [];

var frameCounter = 0;

var scoreElem;
var bestScore = 0;

var paused = false;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	bird = new Bird();
	scoreElem = createDiv('Score = 0');
	bestScoreElem = createDiv('Best Score = 0');
  	scoreElem.position(20, 20);
  	bestScoreElem.position(20, 40);
  	scoreElem.id = 'score';
  	bestScoreElem.id = 'best_score';
  	scoreElem.style('color', 'white');
  	bestScoreElem.style('color', 'white');
}

function draw() {
	background(0);

	if(frameCounter % 70 == 0)
		upcomingPipes.push(new Pipe());

	for(var i=0;i<upcomingPipes.length; i++){
		upcomingPipes[i].show();
		upcomingPipes[i].update();

		if(upcomingPipes[i].hits(bird)){
			endGame(upcomingPipes[i]);
			return;
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

	if (bird.hitBoundary()){
		endGame();
		return;
	}


	bird.show();
	bird.update();



	frameCounter++;
	scoreElem.html('Score : ' + frameCounter);

	if(frameCounter > bestScore)
		bestScore = frameCounter;

	bestScoreElem.html('Best Score : ' + bestScore);

}

function keyPressed() {
		if(key == ' '){
			bird.flap();
		}
		if(key == 'P'){
			if(!paused)
				noLoop();
			else{
				redraw();
				loop();
			}
			paused = !paused;
		}
		
	}
function endGame(pipe) {
	bird.reset();
	upcomingPipes = [];
	passedPipes = [];
	frameCounter = 0;
}


