CellView = Backbone.View.extend({
 events : {
 	"keydown" : "handleKeydown",
 	"dblclick" : "handleClick"
 },
 tagName : "td",
 initialize : function(options) {
   this.options = options;
   this.render();
   this.listenTo(this.model, "change:viewData", this.reRender)
   this.listenTo(this.model, "change:focus", this.setFocus)
 },
 render : function() {
   var input = $("<input>");
   input.attr('id', this.options.letter + this.options.yLocation);
   this.$el.append(input);
   return this;
 },
 location : function() {
 	return this.options.letter + this.options.y
 },
 handleKeydown : function(event) {
 	var keyCode = (event.keyCode ? event.keyCode : event.which);   
    if (keyCode == 13 || keyCode == 9) {
      this.storeData();
    }
    if (keyCode == 13) {
      var cell = app.board.findCellBelow(this.location())
      cell.set("focus", cell.get("focus") + 1);
    }
 },
 storeData : function() {
 	 var data = this.$el.children().val()
    this.model.set("data", data);
    this.model.trigger("change:data");

 },
 reRender : function() {
 	this.$el.children().val(this.model.get("viewData"));
 },
 handleClick : function() {
 	this.$el.children().val(this.model.get("data"));
 },
 setFocus : function() {
 	$("#" + this.location()).focus();
 }
})