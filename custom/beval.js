function Beval () {
  this.cells = [];
  this.operators = [];
}

Beval.prototype.parse = function(equation) {
  if (equation.charAt(0) == "=") {
    equation = equation.substring(1);
  }
  while (equation.length > 0) {
    while (equation.charAt(0) == " ") {
      equation = equation.substring(1);
    }
    var cell = equation.slice(0,2);
    this.cells.push(cell);
    equation = equation.slice(2);
    equation = this.getOperation(equation);
  }
}

Beval.prototype.getOperation = function(equation) {
  if (equation.length == 0) {
    return "";
  }
  while (equation.charAt(0) == " ") {
    equation = equation.substring(1);
  }
  this.operators.push(equation.charAt(0));
  equation = equation.substring(1);
  return equation
}

