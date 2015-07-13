'use strict';
describe( "evaluator", function() {
  describe( "#parse", function() {
    it("should store all coordinates in an array in order", function() {
      var data = "=A1 + B2"
      var evaluator = new Evaluator(data);
      evaluator.parse();
      expect(evaluator.cells).toEqual(["A1", "B2"])
    });

    it("should not break when additional whitespace appears", function() {
      var data = "= A1  +  B2"
      var evaluator = new Evaluator(data);
      evaluator.parse();
      expect(evaluator.cells).toEqual(["A1", "B2"])
    });

    it("should not break when even leading whitespace is encountered", function() {
      var data = " = A1+  B2"
      var evaluator = new Evaluator(data);
      evaluator.parse();
      expect(evaluator.cells).toEqual(["A1", "B2"])
    });

   it("should also put the operators into an array in order", function() {
     var data = " = A1+  B2 * C3 - B7"
     var evaluator = new Evaluator(data);
     evaluator.parse();
     expect(evaluator.operators).toEqual(["+", "*", "-"])
     expect(evaluator.cells).toEqual(["A1", "B2", "C3", "B7"])
   });     
  });
});