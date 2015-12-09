app = {};
// instantiate your board  model and attach it to the app global
// pass your board to your board view as you instaniate it and attach the board view to the app global
// call render on the board view and append the el property of it to the body.
var board = new Board();
var boardView = new BoardView({model : board})
app.board = board;
app.boardView = boardView;
$("body").append(app.boardView.render().el)