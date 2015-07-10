fire up a webserver and serve up the index page
python -m SimpleHTTPServer 8000

click on a cell and enter numbers then hit enter or tab (the data never gets stored unless you use these keys)

double click on a cell to edit a formula

formulas must be of the form "=A1 + B1" (whitespace ignored) but you can't use parenthesis.  you can use as many operators as you want ie (A1 + B1 + C1 * B2) and you can use formulas that specify cells that themselves have formulas (recursion!)

enter makes a cell recalculate

todo: use a regex to remove whitespace or see if js has a native function