Array.prototype.myEach = function (callback) {
  for(var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  var newArray = [];
  for(var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};

Array.prototype.myReduce = function (callback, initVal = this[0]) {
  if (initVal !== this[0]){
      initVal = initVal + this[0];
  }
  for (var i = 0; i < this.length - 2; i++) {
    initVal += callback(this[i + 1], this[i + 2]);
  }
  return initVal;
};

var cb = (acc, ele) => {
    return acc + ele;
};
