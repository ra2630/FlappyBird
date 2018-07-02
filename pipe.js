var Pipe = function () {
	this.top = random(height/2);
	this.bottom = null;
	this.x = width;
	this.w = 20;

	this.color = [255, 0, 255];

	this.speed = 5;

	this.gap = random(height/8, height/4);

	this.show = function () {
		fill(this.color[0], this.color[1], this.color[2]);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, this.top + this.gap, this.w, height);
	}

	this.update = function () {
		this.x -= this.speed;
	}

	this.passedBird = function (birdPos) {
		return this.x < birdPos;
	}

	this.offScreen = function () {
		return this.x + this.w < 0;
	}

}