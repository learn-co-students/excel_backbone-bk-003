function Evaluator (data) {
  this.data = data;
  this.cells = [];
  this.operators = [];
}
Evaluator.prototype.parse = function() {
	var stuffThatINeedToParseInOrderToPassRspecTest = this.data.replace("=","").replace(/\s/g,"");
	this.cells = stuffThatINeedToParseInOrderToPassRspecTest.match(/[A-Z]\w/g);
	this.operators = stuffThatINeedToParseInOrderToPassRspecTest.match(/[^A-E"1-8,\s]/g);
}

