BoardView = Backbone.View.extend({
  tagName : "table",

  render : function() {
 	// '<tbody><tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr>
 	// <tr><td>1</td><td><input id="A1"></td><td><input id="B1"></td><td><input id="C1"></td><td><input id="D1"></td><td><input id="E1"></td></tr>
 	// <tr><td>2</td><td><input id="A2"></td><td><input id="B2"></td><td><input id="C2"></td><td><input id="D2"></td><td><input id="E2"></td></tr>
 	// <tr><td>3</td><td><input id="A3"></td><td><input id="B3"></td><td><input id="C3"></td><td><input id="D3"></td><td><input id="E3"></td></tr>
 	// <tr><td>4</td><td><input id="A4"></td><td><input id="B4"></td><td><input id="C4"></td><td><input id="D4"></td><td><input id="E4"></td></tr>
 	// <tr><td>5</td><td><input id="A5"></td><td><input id="B5"></td><td><input id="C5"></td><td><input id="D5"></td><td><input id="E5"></td></tr></tbody>')
	var miniDom = $('<tbody>')
	miniDom.append('<tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr>')
	this.model.cells.push([])
	for (var i=0; i<5; i++) {
		var row = $('<tr>')
		var modelArr = []
		row.append('<td>' + (i+1) + '</td>')
		for ( var n=0; n<5; n++) {
			var model = new Cell()
			var view = new CellView({letter : String.fromCharCode(n+65), y : i+1, model : model})
			modelArr.push(model)
			row.append(view.el)
		}
		this.model.cells.push(modelArr)
		miniDom.append(row)
	}
	this.$el.html(miniDom)
  	return this;
  }
})