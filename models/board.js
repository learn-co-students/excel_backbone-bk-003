function Board() {
  this.cells = [];
}

Board.prototype.findCell = function(identifier) {
  // This is how we actually store the cells
  // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
  var cell = this.nameToNums(identifier);
  return this.cells[cell.row][cell.col];
}

Board.prototype.findCellBelow = function(identifier) {
  var cell = this.nameToNums(identifier);
  return this.cells[cell.row+1][cell.col];
}

Board.prototype.letterAsNumber = function(char) {
  return char.charCodeAt() - 65;
}


Board.prototype.nameToNums = function(identifier) {
  var letter = identifier[0];
  var col = this.letterAsNumber(letter);
  var row = +identifier.substr(1);
  return {
    row: row,
    col: col
  };
};
