Cell = Backbone.Model.extend({
  defaults : {
    focus : 0,
    data: '',
    viewData: 0
  },
  initialize : function() {
    this.listenTo(this, 'change:data', this.recalcViewData)
  },
  recalcViewData : function() {
    var data = this.get("data")
    var newValue;
    if(data.match(/=/)){
      newValue = new Evaluator(data).formulaTotal()
    }else{
      newValue = +data
    }
    this.set({"viewData": newValue})
  }

});