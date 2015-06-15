Board = Backbone.Model.extend({
  defaults : {
    cells : []
  },
  letterAsNumber : function (letter) {
    var hash = {"A" : 0, "B" : 1, "C" : 2, "D" : 3, "E" : 4};
    return hash[letter];
  },
  findCell : function(identifier) {
    var letter = identifier.charAt(0);
    var number = identifier.charAt(1);
    return this.get("cells")[number][this.letterAsNumber(letter)];
  }
})