CellView = Backbone.View.extend({
  events : {
    'keydown' : 'handleKeydown',
    'dblclick' : 'handleClick'
  },
  tagName : "td",
  initialize : function(options) {
    this.options = options
    this.render()
    this.listenTo(this.model, 'change:viewData', this.reRender, this)
    this.listenTo(this.model, 'change:focus', this.Focus)
  },
  render : function() {
    this.$el.append($('<input>').attr({id : this.options.letter+this.options.y}))
  },
  location : function() {
    return this.$('input')[0].id
  },
  handleKeydown : function(event) {
    if (event.keyCode == 13) {
      this.storeData()
      this.setFocus()
      this.reRender()
    };
    if (event.keyCode == 9) {
      this.storeData()
      this.reRender()
    };
  },
  storeData : function() {
    this.model.set('data', this.$('input').val())
  },
  reRender : function() {
    if (this.model) {
      this.model.trigger('change:data')
      this.$el.children().val(this.model.get('viewData') || '')
    }
  },
  handleClick : function() {
    this.$('input').val(this.model.get('data'))
  },
  setFocus : function() {
    var cell = app.board.findCellBelow(this.location())
    cell.set('focus', cell.get('focus')+1)
  },
  Focus : function() {
    this.$el.children().focus();
  }

})