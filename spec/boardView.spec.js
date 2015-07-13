'use strict';
describe( "boardView", function() {
  describe( "#render", function() {
    it("should print out the following HTML", function() {
      expect(app.boardView.$el.prop('outerHTML')).toEqual('<table><tbody><tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr><tr><td>1</td><td><input id="A1"></td><td><input id="B1"></td><td><input id="C1"></td><td><input id="D1"></td><td><input id="E1"></td></tr><tr><td>2</td><td><input id="A2"></td><td><input id="B2"></td><td><input id="C2"></td><td><input id="D2"></td><td><input id="E2"></td></tr><tr><td>3</td><td><input id="A3"></td><td><input id="B3"></td><td><input id="C3"></td><td><input id="D3"></td><td><input id="E3"></td></tr><tr><td>4</td><td><input id="A4"></td><td><input id="B4"></td><td><input id="C4"></td><td><input id="D4"></td><td><input id="E4"></td></tr><tr><td>5</td><td><input id="A5"></td><td><input id="B5"></td><td><input id="C5"></td><td><input id="D5"></td><td><input id="E5"></td></tr></tbody></table>');
    })

    it("should add the cell models to the board", function() {
      app.board = new Board();
      app.boardView = new BoardView({model : app.board});
      app.boardView.render();
      expect(app.board.cells.length).toEqual(6)
    })
  });
})