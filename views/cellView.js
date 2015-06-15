CellView = Backbone.View.extend({
  events : {
    "keydown" : "handleEnter",
    "dblclick" : "handleClick"
  },
  tagName : "td",
  initialize : function(options) {
    this.letter = options.letter;
    this.i = options.i;
    this.listenTo(this.model, "change:viewData", this.reRender)
  },
  render : function() {
    this.$el.append("<input id='"+ this.letter+this.i +"'/>");
    return this
  },
  handleEnter : function(event) {
    var keyCode = (event.keyCode ? event.keyCode : event.which);   
    if (keyCode == 13) {
      var data = this.$el.children().val()
      this.model.set("data", data);
      this.model.trigger("change:data");
    }
  },
  reRender : function() {
    this.$el.children().val(this.model.get("viewData"));
  },
  handleClick : function() {
    this.$el.children().val(this.model.get("data"));
  }
})