app = {};
app.board = new Board();
app.boardView = new BoardView({model : board});
$("body").append(app.boardView.render().el);