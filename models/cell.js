Cell = Backbone.Model.extend({
  defaults : {
    focus : 0
  },
  initialize : function() {
  	this.on('change:data', this.recalcViewData)
  },
  extract: function(data) {
  	return data.match(/[A-Z]\w/g)[0]
  },
  findMyCell: function(cell) {
  	return app.board.findCell(cell)
  },
  recalcViewData : function() {
  	var evaluator = new Evaluator(this.get("data"));
  	evaluator.parse()
  	var myOperators = evaluator.operators
  	var container = "";
  	if(this.get("data").match(/=/)){
  		if (myOperators == null) { //just one value
  			this.set("viewData", parseInt(this.findMyCell(this.extract(evaluator["data"])).get("data"))) //set it equal to the number
  		}
  		else {
  			// Loop over operators
  			for (var i=0; i < evaluator.cells.length; i++) {
  				var cell = this.findMyCell(evaluator.cells[i]);
  				// debugger
  				if(cell.get("data").match(/=/)){
  					// We got another formula to evaluate (cell == to another cell)
  					var operator = myOperators[i]
            container += this.findMyCell(this.extract(cell.get("data"))).get("data");
	  					if(operator != undefined) {
	  						container += (operator);
	  					}
  				 }
  				else{
  					//debugger
  					// Here we just have the actual value
  					var operator = myOperators[i]
  					container += cell.get("data")
  					if(operator != undefined) {
	  						container += operator;
	  				}
  				}
  			} //end for loop
  			this.set("viewData", eval(container))
  		} // end else
  	} // end first if
  	else {
  		this.set("viewData", parseInt(this.get("data"))) //set it equal to the number
  	}
  }
});