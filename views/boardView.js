BoardView = Backbone.View.extend({
  tagName : "table",

  render : function() {
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