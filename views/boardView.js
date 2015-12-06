BoardView = Backbone.View.extend({
  initialize : function(){
    this.render();
  },
  tagName : "table",
  render : function() {
    this.model.cells = [[]]
    var $table = $('<tbody><tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr></tbody>')
    for (var i = 0; i < 5; i++) {
      this.model.cells.push([])
      $tr = $("<tr><td>" + (i+1) + "</td></tr>")
      for (var j = 0; j < 5; j++) {
        var letter = String.fromCharCode(j+65)
        var cellModel = new Cell()
        var cellView = new CellView({letter: letter, y: i+1, model: cellModel})
        this.model.cells[i+1].push(cellModel)
        $tr.append(cellView.el)
      }
      $table.append($tr);
    };
    this.$el.append($table);
    return this;
  }
})
