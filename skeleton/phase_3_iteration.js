Array.prototype.bubbleSort = function () {
  for (var i = this.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (this[j] > this[j + 1]) {
        temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

String.prototype.substrings = function () {
  var output = [];
  for (var i = 0; i <= this.length - 1; i ++){
    for (var j = 1; j <= this.length; j++){
      if (this.slice(i,j).length === 0) {
          continue;
      }
      output.push(this.slice(i,j));
    }
  }
  return output;
};
