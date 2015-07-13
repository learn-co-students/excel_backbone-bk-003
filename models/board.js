function Board () {
  this.cells = [];
}

Board.prototype.letterAsNumber = function (letter) {
  var hash = {"A" : 0, "B" : 1, "C" : 2, "D" : 3, "E" : 4};
  return hash[letter];
}

Board.prototype.findCell = function(identifier) {
  // This is how we actually store the cells
  // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
  var letter = identifier.charAt(0);
  var number = parseInt(identifier.charAt(1));
  return this.cells[number][this.letterAsNumber(letter)];
}

Board.prototype.findCellBelow = function(identifier) {
  var number = identifier.charAt(1);
  var letter = identifier.charAt(0);
  var newIdent = letter + (parseInt(number) + 1);
  return this.findCell(newIdent);
}
