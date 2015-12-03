function Board () {
  this.cells = [];
}

Board.prototype.letterAsNumber = function(letter) {
	return letter.charCodeAt(0) - 65
};

Board.prototype.findCell = function(identifier) {
  // This is how we actually store the cells
  // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
  return this.cells[identifier.match(/\d+/)][this.letterAsNumber(identifier)]
}

Board.prototype.findCellBelow = function(identifier) {
	return this.cells[Number(identifier.match(/\d+/))+1][this.letterAsNumber(identifier)]
}
