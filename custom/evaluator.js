function Evaluator (data) {
  this.data = data;
  this.cells = [];
  this.operators = [];
  this.removeWhitespace();
}

Evaluator.prototype.removeWhitespace = function() {
  this.data = this.data.replace(/\s/g, '');
}

Evaluator.prototype.parse = function() {
  var equation = this.data;
  if (equation.charAt(0) == "=") {
    equation = equation.substring(1);
  }
  while (equation.length > 0) {
    var cell = equation.slice(0,2);
    this.cells.push(cell);
    equation = equation.slice(2);
    equation = this.getOperation(equation);
  }
}

Evaluator.prototype.getOperation = function(equation) {
  if (equation.length == 0) {
    return "";
  }
  this.operators.push(equation.charAt(0));
  equation = equation.substring(1);
  return equation
}

