CellView = Backbone.View.extend({
  events : {
    'keydown' : 'handleKeydown',
    'dblclick' : 'handleClick'
  },
  tagName : "td",
  initialize : function(options) {
    var input = $('<input>').attr({id : options.letter+options.y})
    this.$el.append(input)
    this.listenTo(this.model, 'change:viewData', this.reRender)
  },
  render : function() {
  },
  location : function() {
    return this.$('input')[0].id
  },
  handleKeydown : function(event) {
    if (event.keyCode == 13) {
      this.storeData()
      this.setFocus()
    };
    if (event.keyCode == 9) {
      this.storeData()
    };
  },
  storeData : function() {
    this.model.set('data', this.$('input').val())
  },
  reRender : function() {
  },
  handleClick : function() {
    this.$('input').val(this.model.get('data'))
  },
  setFocus : function() {
    app.board.findCell(this.location()).set('focus', 0)
    app.board.findCellBelow(this.location()).set('focus', 1)
  }
})