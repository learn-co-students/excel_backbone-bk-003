function Board () {
  
  this.cells = [];
  this.letters = [];

  for (var i = 0; i <= 25; i++) {
    this.letters.push(String.fromCharCode(65 + i));
  };

  // for (var i = 0; i < 5; i++) {
  //     this.createCell(i);
  // };

  
  // this.cells.unshift([]);
    
}

Board.prototype.findCell = function(identifier) {
  // This is how we actually store the cells
  // [[],[A1, B1, C1, D1, E1 ], [A2, B2, C2, D2, E2]]
  //Need to go through each array of arrays
  
 // this.cells.forEach(this.look)
 // var found;
 // for (var i = 0; i < this.cells.length; i++) {
 //   if(found = this.look(this.cells[i],identifier))
 //    return found;

 // };

 
 numberIndex = +identifier[1]
 letterIndex = this.letterAsNumber(identifier[0])
 return this.cells[numberIndex][letterIndex]

  
}

Board.prototype.findCellBelow = function(identifier) {
 numberIndex = +identifier[1] + 1
 letterIndex = this.letterAsNumber(identifier[0])
 return this.cells[numberIndex][letterIndex]
} 

Board.prototype.letterAsNumber = function(letter){
  
  return this.letters.indexOf(letter);
}

// Board.prototype.createCell = function(num){
//   var temp = []
//   for (var j = 0; j < this.letters.length; j++) {
//     temp.push(this.letters[j] + (num+1));  
//   };
  
//   this.cells.push(temp);
// }

// Board.prototype.look = function(array,identifier){
//   debugger
//   array.find(function(element){
//     if( element.substr(0,2) === identifier){
//         return element
//       }
//       else
//         return false
//   })

