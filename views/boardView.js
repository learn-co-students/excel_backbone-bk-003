BoardView = Backbone.View.extend({
  tagName : "table",
  render : function() {
    for (var i=0; i<6; i++) {
      var rowCells = []
      var row = $("<tr></tr>")
      for (var j=0; j<6; j++) {
        var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
        if (i&&j) {
          var cell = new Cell();
          rowCells.push(cell)
          var cellView = new CellView({y : i, letter : letter, model : cell}).render().el;
        }
        else { 
          var text = i||letter;
          var cellView = "<td>" + text + "</td>";
        }
        $(row).append(cellView);
      }
      this.$el.append(row);
      this.model.cells.push(rowCells);
    }
    return this;
  }
})