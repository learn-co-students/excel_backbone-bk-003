'use strict';
describe( "cellView", function() {
  describe( "#initialize/location", function() {
    it("should store all coordinates in an array in order", function() {
      var cellView = new CellView({letter : "A", y: 1});
      expect(cellView.location()).toEqual("A1");
    })
  });
  describe( "#handleKeydown", function() {
    it("should call the handleKeydown function on keydown", function() {
      var spy = spyOn(CellView.prototype, "handleKeydown");
      var cellView = new CellView({letter : "A", y: 1});
      cellView.$el.keydown();
      expect(cellView.handleKeydown).toHaveBeenCalled();
    })
  });

  describe( "#handleKeydown", function() {
    it("should save the data on enter", function() {
      var cellView = new CellView({letter : "A", y: 1});
      var spy = spyOn(cellView, "storeData");
      var e = $.Event("keydown", {keyCode: 13});
      cellView.$el.trigger(e);
      expect(spy).toHaveBeenCalled();
    })
  });

  describe( "#handleKeydown", function() {
    it("should save the data on enter", function() {
      var cellView = new CellView({letter : "A", y: 1});
      var spy = spyOn(cellView, "storeData");
      var e = $.Event("keydown", {keyCode: 9});
      cellView.$el.trigger(e);
      expect(spy).toHaveBeenCalled();
    })
  });

  describe( "#handleKeydown", function() {
    it("should save the data on tab", function() {
      var cellView = new CellView({letter : "A", y: 1});
      var spy = spyOn(cellView, "storeData");
      var e = $.Event("keydown", {keyCode: 13});
      cellView.$el.trigger(e);
      expect(spy).toHaveBeenCalled();
    })
  });

  describe( "#handleKeydown", function() {
    it("should not save the data on any key other than tab or enter", function() {
      var cellView = new CellView({letter : "A", y: 1});
      var spy = spyOn(cellView, "storeData");
      var e = $.Event("keydown", {keyCode: 12});
      cellView.$el.trigger(e);
      expect(spy).not.toHaveBeenCalled();
    })
  });

  describe( "#handleKeydown", function() {
    it("should set the focus on the cell below when enter is pressed", function() {
      var cell = new Cell();
      var cellTwo = new Cell();
      app.board.cells = [[],[cell],[cellTwo]]
      var cellView = new CellView({letter : "A", y: 1, model : cell});
      var spy = spyOn(cellView, "storeData");
      var e = $.Event("keydown", {keyCode: 13});
      cellView.$el.trigger(e);
      expect(cellTwo.get("focus")).toEqual(1)
    })
  });

  describe( "#changeViewDataEvent", function() {
    it("should call reRender when the viewData is changed", function() {
      var cell = new Cell();
      var cellTwo = new Cell();
      var spy = spyOn(CellView.prototype, "reRender");
      app.board.cells = [[],[cell],[cellTwo]]
      var cellView = new CellView({letter : "A", y: 1, model : cell});
      cell.trigger("change:viewData");
      expect(spy).toHaveBeenCalled();
    })
  });

  describe( "#handleClick", function() {
    it("should replace the contents of the input box with the model's data on doubleclick", function() {
      var cell = new Cell();
      var cellTwo = new Cell();
      app.board.cells = [[],[cell], [cellTwo]]
      var cellView = new CellView({letter : "A", y: 2, model : cellTwo});
      cellView.render();
      cell.set("data", "7");
      cellTwo.set("data", "=A1");
      cellView.$el.trigger("dblclick");
      expect(cellView.$el.children().val()).toEqual("=A1")
    })
  });

  describe( "#changeFocusEvent", function() {
    // it("should set the focus on the cellView when the focus is changed on the model", function() {
    //   var cell = new Cell();
    //   app.board.cells = [[],[cell]]
    //   var cellView = new CellView({letter : "A", y: 1, model : cell});
    //   cellView.render();
    //   $("body").append(cellView.el);
    //   cell.set("focus", "1");
    //   expect("focus").toHaveBeenTriggeredOn("#A1")
    // })
  // not sure why this doesn't work. DOM is loaded, element is findable, focus gets called on it...
  });
})