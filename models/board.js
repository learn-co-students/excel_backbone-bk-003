// function Board () {
//   this.cells = []; 
// }

// Board.prototype.findCell = function(identifier) {
//   // This is how we actually store the cells
//   // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
// return this.cells[identifier[1]][this.letterAsNumber(identifier[0])]
// }

// Board.prototype.findCellBelow = function(identifier) {
// return this.cells[Number(identifier[1])+1][this.letterAsNumber(identifier[0])]
// }

// Board.prototype.letterAsNumber = function(letter) {
// 	return letter.charCodeAt(0) - 65;
// }
function Board () {
 this.cells = [];
 this.letters = ["A", "B", "C", "D", "E", "F"];
}

Board.prototype.letterAsNumber = function(letter) {
 return this.letters.indexOf(letter);
}

Board.prototype.findCell = function(identifier) {
 // This is how we actually store the cells
 // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
 // [[],["A1Cell", "B1Cell", "C1Cell"],["A2Cell", "B2Cell", "C2Cell"]]
 return this.cells[identifier[1]][this.letterAsNumber(identifier[0])]
}

Board.prototype.findCellBelow = function(identifier) {
 //Identifier => "A1", identifier[0] => A, identifier[1] => 1
 return this.cells[Number(identifier[1])+1][this.letterAsNumber(identifier[0])]
}