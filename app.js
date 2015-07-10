app = {};
app.board = new Board();
app.boardView = new BoardView({model : app.board});
$("body").append(app.boardView.render().el);