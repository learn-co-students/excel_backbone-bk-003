Board = Backbone.Model.extend({
  defaults : {
    cells : []
  },
  findCell : function(identifier) {
    var letter = identifier.charAt(0);
    var number = identifier.charAt(1);
    return this.get("cells")[number][letter];
  }
})