BoardView = Backbone.View.extend({
  tagName : "table",
  render : function() {
  	var row = 5;
  	var col = 5;

  	var tbody = $("<tbody><tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr></tbody>");
  	var all_cells = [[]];
  	for (var i = 0; i < row; i++) {
  		var tr = $('<tr>');
  		var first_td = $("<td>").text(i+1);
  		tr.append(first_td);
  		var js_row =[];
  		for (var j = 0; j < col; j++) {
  			var cell = new Cell();
  			var cellView = new CellView({letter: String.fromCharCode(j+65), y: i+1, model:cell});
  			tr.append(cellView.el);
  			js_row.push(cellView);
  		}
  		tbody.append(tr);
  		all_cells.push(js_row);
  	}
  	this.model.cells = all_cells;
  	this.$el.empty().append(tbody);
    return this;
  }
})