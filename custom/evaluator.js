function Evaluator (data) {
  this.data = data;
  this.cells = [];
  this.operators = [];
  this.parse()
}

Evaluator.prototype.parse = function() {
  this.cells = this.data.toUpperCase().match(/[A-Z]\d/g);
  this.operators = this.data.match(/[\+\*\-\/]/g);
}

Evaluator.prototype.formulaTotal = function() {
  var total = 0
  var cellsLength = this.cells.length
  for (var i = 0; i < cellsLength; i++) {
    var cellValue = Number(app.board.findCell(this.cells[i]).attributes.viewData)
    if(total == 0){
      total = total + cellValue
    } else {
      total = eval(total + this.operators[i - 1] + cellValue)
    }
  }
  return total
}


