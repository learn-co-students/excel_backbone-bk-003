Cell = Backbone.Model.extend({
  defaults : {
    focus : 0
  },
  initialize : function() {
    this.on("change:data", this.recalcViewData)
  },
  recalcViewData : function() {
    if (this.get("data").charAt(0) == "=") {
      var evaluator = new Evaluator(this.get("data"));
      evaluator.parse();
      var evaledCells = [];
      var stringToEval = "";
      evaluator.cells.forEach(function(cell) {
        evaledCells.push(app.board.findCell(cell).get("viewData"));
      });
      evaledCells.forEach(function(cell) {
        stringToEval = stringToEval + cell;
        if (evaluator.operators.length > 0) {
          stringToEval = stringToEval + evaluator.operators.shift(); 
        }
      })
      this.setView(eval(stringToEval));
    } else {
      this.setView(parseInt(this.get("data")));
    }
  },
  setView : function(newData) {
    this.set("viewData", newData);
    if (!this.changedAttributes()) {
      this.trigger("change:viewData");
    }
  },

});