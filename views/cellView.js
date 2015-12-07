CellView = Backbone.View.extend({
  events : {
    "dblclick": "handleClick",
    "keydown": "handleKeydown"
  },
  tagName : "td",
  initialize : function(options) {
    this.model.set({"position": options.letter + options.y})
    this.model.on('change:viewData', this.reRender, this)
    this.render()
  },
  render : function() {
    this.$el.append('<input id=' + this.location() + '>')
  },
  location : function() {
    return this.model.get("position")
  },
  handleKeydown : function(event) {
    if(event.keyCode == 13){
      this.storeData()
      this.setFocus()
    }
    else if(event.keyCode == 9){
      this.storeData()
    }
  },
  storeData : function() {
    var input = this.$el.children().val()
    this.model.set({"data": input})
    this.model.recalcViewData()
  },
  reRender : function() {
    debugger
    var new_value = this.model.get("viewData")
    this.$el.children().val(new_value)
  },
  handleClick : function() {
    this.model.set({viewData: this.model.get("data")})
  },
  setFocus : function() {
    app.board.findCellBelow(this.location()).set({focus: 1})
  }
})