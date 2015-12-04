Cell = Backbone.Model.extend({
  defaults: {
    focus: 0,
    viewData: null,
    data: null
  },
  initialize: function() {
    this.on("change:data", this.recalcViewData);
  },
  recalcViewData: function() {
    if (this.get('data').match(/\=/)) {
      var evaluator = new Evaluator(this.get('data'));
      evaluator.parse();


      if (evaluator.operators.length > 0) {
        var sum = app.board.findCell(evaluator.cells[0]).get('viewData');
        for (var i = 1; i < evaluator.cells.length; i++) {
          var num = app.board.findCell(evaluator.cells[i]).get('viewData')
          sum = eval(sum + evaluator.operators[i - 1] + num)
        }
      } else {
        var sum = app.board.findCell(evaluator.cells[0]).get('viewData');
      }
      this.set('viewData', +(sum));
    } else {
      this.set('viewData', +(this.get('data')))
    };
  },
  setView: function(newData) {
    this.set("viewData", newData);
    if (!this.changedAttributes()) {
      this.trigger("change:viewData");
    }
  }

});


function Evaluator (data) {
  this.data = data;
  this.cells = [];
  this.operators = [];
}

Evaluator.prototype.parse = function() {
	this.cells = this.data.split(/[^\w\d]/).filter(function(el){return el.match(/[^\s]/)})
	this.operators = this.data.split(/[\w\d\=\s]/).filter(function(el){return el.match(/[^\s]/)})
}
