BoardView = Backbone.View.extend({
  tagName : "table",
initialize: function() {

},
render : function() {
  for(var i=0; i<6; i++){
    row   = $('<tr></tr>');
    for(var j=0; j<6; j++){
      if (i==0){
        var cell = $('<td></td>');
        cell.text(String.fromCharCode(j+64));
        row.append(cell);
      }
      else if (i!=0 && j==0){
        var cell = $('<td></td>')
        cell.text(i);
        row.append(cell);
      }
      else{
        var cell = new Cell();
        var cellView = new CellView({letter: String.fromCharCode(j+64), yLocation: i, model:cell});
        row.append(cellView.el);
      }
    }
    this.$el.append(row)
    if(i>0){
      this.model.cells.push(row);
    }
  }
  return this;
}
})