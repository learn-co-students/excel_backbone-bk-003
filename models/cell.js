Cell = Backbone.Model.extend({
  defaults : {
    focus : 0
  },
  initialize : function() {
  	this.on('change:data', this.figureShitOut, this);
  },
  recalcViewData : function() {
  	this.set('viewData', Number(this.get('data')))
  },
  figureShitOut : function() {
  	if (this.get('data').match(/\=/)) {
  		var evaluator = new Evaluator(this.get('data'))
  		evaluator.parse()
  			if (evaluator.operators.length > 0) {
  				var sum = app.board.findCell(evaluator.cells[0]).get('data');
  				for (var i=1; i<evaluator.cells.length; i++) {
  					debugger
  					if (app.board.findCell(evaluator.cells[i]).get('data').match(/\=/)) {
  						debugger
  						var num = app.board.findCell(evaluator.cells[i]).get('viewData')
  					} else {
  						debugger
  						var num = app.board.findCell(evaluator.cells[i]).get('data')
  					}
  						
  						sum = eval( sum + evaluator.operators[i-1] +  num )
  					// eval( app.board.findCell(evaluator.cells[i]).get('data') + evaluator.operators[i] )
  				}
  			} else {
  				var sum = app.board.findCell(evaluator.cells[0]).get('data');
  			}
  		this.set('viewData', Number(sum));
  	}
  }

});