Cell = Backbone.Model.extend({
  defaults : {
    focus : 0
  },
  initialize : function() {
  	this.on('change:data', this.recalcViewData, this);
  },
  recalcViewData : function() {
    if (this.get('data').match(/\=/)) {
      var evaluator = new Evaluator(this.get('data'))
      evaluator.parse()
      var sum = app.board.findCell(evaluator.cells[0]).get('viewData');
        for (var i=1; i<evaluator.cells.length; i++) {
            var num = app.board.findCell(evaluator.cells[i]).get('viewData')
            sum = eval( sum + evaluator.operators[i-1] +  num )
        }
      this.set('viewData', Number(sum));
    } else {
      this.set('viewData', Number(this.get('data')))
    };
  }
});