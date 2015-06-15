Cell = Backbone.Model.extend({
  initialize : function() {
    this.on("change:data", this.recalcViewData)
  },
  recalcViewData : function() {
    if (this.get("data").charAt(0) == "=") {
      var beval = new Beval(this.get("data"));
      beval.parse();
      var evaledCells = [];
      var stringToEval = "";
      beval.cells.forEach(function(cell) {
        evaledCells.push(board.findCell(cell).get("viewData"));
      });
      while (evaledCells.length > 0) {
        stringToEval = stringToEval + evaledCells.shift();
        if (beval.operators.length > 0) {
          stringToEval = stringToEval + beval.operators.shift(); 
        }
      }
      this.set("viewData", eval(stringToEval));
    } else {
      this.set("viewData", this.get("data"));
    }
  },

});