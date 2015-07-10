We're going to build a clone of Google Spreadsheets.
You can see an example of what we're aiming to build at:
http://learn-co-curriculum.github.io/excel_backbone/

Click on a cell and enter numbers then hit enter or tab (the data never gets stored unless you use these keys)

Double click on a cell to edit a formula

Formulas must be of the form "=A1 + B1" (whitespace ignored) but you can't use parenthesis.  You can use as many operators as you want ie (A1 + B1 + C1 * B2) and you can use formulas that specify cells that themselves have formulas (recursion!)

If you click on a cell and hit enter it makes that cell recalculate.  It will not recalculate all dependencies of that cell automatically.

todo: use a regex to remove whitespace or see if js has a native function

Once you've played around with the live version it's time to start building our own.

If you start thinking in Backbone terms, there are a bunch of different ways we could do this.  The first thing that came to my mind was representing the board as a collection.  Each cell would be an individual model and a board would hold all the cells.  However this didn't really make that much sense as the best functionality of a collection is to automatically emit add/remove events when its models are added or removed.  In this case, the number of cells on the board is fixed and they'll never change, so I'm not sure how much good a collection is going to do for us.  However, we are going to need some object that manages the cells, and we can use a POJO (Plain Old Javascript object for this) that keeps an internal data structure that represents the cells.  I'd love it to have a function that can take coordinates like "C4" and retrive the actual model object for me.  We could either represent the board as a "hash" or an object in javascript terms where the keys are like A1 and the values are the model objects, or we can use an array of arrays.  I'm partial to an array of arrays because you have positional data encoded in the indices of the arrays.