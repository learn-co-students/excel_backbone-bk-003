'use strict';

describe("board", function() {
  describe( "#letterAsNumber", function() {
    it("should give me the numberical equivalent of a letter (only A-F)", function() {
      expect(app.board.letterAsNumber("C")).toEqual(2)
    });
    
    it("should find my cell in the cells array", function() {
      app.board = new Board();
      app.board.cells = [[],["A1Cell", "B1Cell", "C1Cell"],["A2Cell", "B2Cell", "C2Cell"]]
      
      expect(app.board.findCell("A1")).toEqual("A1Cell")
    });

    it("should find my cell in the cells array 2", function() {
      app.board = new Board();
      app.board.cells = [[],["A1Cell", "B1Cell", "C1Cell"],["A2Cell", "B2Cell", "C2Cell"]]
      expect(app.board.findCell("B2")).toEqual("B2Cell")
    });
     
  });
  describe( "#findCellBelow", function() {
    it("should be able to find me the cell below my cell", function() {
      app.board = new Board();
      app.board.cells = [[],["A1Cell", "B1Cell", "C1Cell"],["A2Cell", "B2Cell", "C2Cell"],["A3Cell", "B3Cell", "C3Cell"]]
      expect(app.board.findCellBelow("B2")).toEqual("B3Cell")
    });

    it("should be able to find me the cell below my cell 2", function() {
      app.board = new Board();
      app.board.cells = [[],["A1Cell", "B1Cell", "C1Cell"],["A2Cell", "B2Cell", "C2Cell"]]
      expect(app.board.findCellBelow("A1")).toEqual("A2Cell")
    });
  });

})