app = {};
board = new Board();
app.board = board;
// instantiate your board  model and attach it to the app global
// pass your board to your board view as you instaniate it and attach the board view to the app global
app.boardView = new BoardView({model: board})
// call render on the board view and append the el property of it to the body.
app.boardView.render()
('body').append(app.boardView.el)