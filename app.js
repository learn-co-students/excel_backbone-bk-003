board = new Board();
boardView = new BoardView({model : board});
$("body").append(boardView.render().el);