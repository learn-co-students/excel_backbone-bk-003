CellView = Backbone.View.extend({
  events : {
    "keydown" : "handleEnter"
  },
  tagName : "td",
  initialize : function(options) {
    this.letter = options.letter;
    this.i = options.i;
    this.listenTo(this.model, "change", this.reRender)
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
    }
  },
  reRender : function() {
    if (this.model.data.charAt(0) == "=") {
      
    } else {
      this.$el.children().val(this.model.data);
    }
  }
})