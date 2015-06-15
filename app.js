board = new Board();
boardView = new BoardView({model : board});
$("body").append(boardView.render().el);
// var beval = new Beval();
// beval.parse("=A1 + B2")
// board.findCell(beval.cells[0])