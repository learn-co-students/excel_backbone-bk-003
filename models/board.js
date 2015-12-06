function Board () {
  this.cells = [[]];
}

Board.prototype.findCell = function(identifier) {
  // This is how we actually store the cells
  // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
  numberIndex = +identifier[1]
  letterIndex = this.letterAsNumber(identifier[0])
  return this.cells[numberIndex][letterIndex]
}

Board.prototype.findCellBelow = function(identifier) {
  numberIndex = +identifier[1] + 1
  letterIndex = this.letterAsNumber(identifier[0])
  return this.cells[numberIndex][letterIndex]
}

Board.prototype.letterAsNumber = function(letter) {
  return letter.charCodeAt(0) - 65
}
