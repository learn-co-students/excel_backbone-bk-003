board = new Board();
boardView = new BoardView({model : board});
var board = boardView.render().el;
$("body").append(board);