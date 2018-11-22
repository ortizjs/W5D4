
Array.prototype.uniq = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if (arr.includes(this[i]) === false) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.twoSum = function () {
  var output = [];
  for(var i = 0; i < this.length - 1; i++) {
    for(var j = (i+1); j < this.length; j++){
      if (this[i] + this[j] === 0) {
        output.push([i,j]);
      }
    }
  }


  return output;
};

Array.prototype.transpose = function () {
  var output = [];
  for(var row = 0; row < this.length - 1; row++) {
    var temp = [];
    for(var col = 0; col < row.length; col++){
      temp.push(this[col][row]);
    }
    output.push(temp);
  }


  return output;
};
