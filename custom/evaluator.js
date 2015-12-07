function Evaluator (data) {
  this.data = data;
  this.cells = [];
  this.operators = [];
}

Evaluator.prototype.parse = function() {
  this.cells = this.data.split(/[^\w\d]/).filter(function(el){return el.match(/[^\s]/)})
  this.operators = this.data.split(/[\w\d\=\s]/).filter(function(el){return el.match(/[^\s]/)})
}

