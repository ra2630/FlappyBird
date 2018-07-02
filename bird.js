function Bird () {
	this.y = height/2;
	this.x = 40;
	this.r = 25;

	this.birdColor = [255,255,255];

	this.gravity = 0.8;
	this.flapSpeed = -15;
	this.velocity = 0;
	this.airResistance = 0.9;

	this.show = function () {
		fill(this.birdColor[0], this.birdColor[1], this.birdColor[2]);
		ellipse(this.x, this.y, this.r,this.r);
	}

	this.update = function () {
		this.y += this.velocity;
		this.velocity += this.gravity;
		this.velocity *= this.airResistance;
	}

	this.reset = function () {
		
		this.y= height/2;
		this.velocity = 0;
	}

	this.hitBoundary = function() {
		if(this.y > height || this.y < 0)
			return true;
		return false;
	}

	this.flap = function() {
		this.velocity += this.flapSpeed;
		this.velocity *= this.airResistance;
	}


}