fire up a webserver and serve up the index page
python -m SimpleHTTPServer 8000
click on a cell and enter numbers then hit enter
double click on a cell to edit a formula
formulas must be of the form "=A1 + B1" (whitespace ignored) but you can't use parenthesis
enter makes a cell recalculate

todo: make it so when you hit enter the focus is moved to the cell below
use a regex to remove whitespace or see if js has a native function