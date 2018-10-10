var OrangeTree = function() {
	this.age = 0
	this.height = 0
	this.oranges = []
}

OrangeTree.prototype.isMature = function() {
	return this.age > 6;
}

OrangeTree.prototype.isDead = function() {
	return this.age >= 100;
}

OrangeTree.prototype.hasOranges = function() {
	return this.oranges.length > 0
}

OrangeTree.prototype.passGrowingSeason = function() {
	if (!this.isDead()) {
		this.oranges = []
		this.age += 1
		if (this.height < 25) {
			this.height += 2.5
		}
		if (this.age >= 6) {
			for(i=0;i<10;i++) {
				(this.oranges.push(new Orange()))
			}
		  }
	}
}

OrangeTree.prototype.pickAnOrange = function() {
	orange = this.oranges.shift()
	return orange
}