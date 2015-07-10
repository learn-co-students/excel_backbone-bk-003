'use strict';

describe( "cell", function() {
  describe( "#recalcViewData", function() {
    it("should be able to recalculate the data to be displayed to the user", function() {
      var cell = new Cell();
      cell.set("data", "7")
      cell.recalcViewData();
      expect(cell.get("viewData")).toEqual(7);
    });

    it("should be able to recalculate the data to be displayed to the user for equations", function() {
      var cell = new Cell();
      var cellTwo = new Cell();
      app.board.cells = [[cell, cellTwo]]
      cellTwo.set("data", "7")
      cell.set("data", "=A2")
      expect(cellTwo.get("viewData")).toEqual(7);
    });

    it("should be able to recalculate the data to be displayed to the user for equations even recursively", function() {
      var cell = new Cell();
      var cellTwo = new Cell();
      var cellThree = new Cell();
      app.board.cells = [[cell, cellTwo, cellThree]]
      cellTwo.set("data", "7")
      cell.set("data", "=A2")
      cellThree.set("data", "=A1+A2")
      expect(cellThree.get("viewData")).toEqual(14);
    }); 
  });
   
});
