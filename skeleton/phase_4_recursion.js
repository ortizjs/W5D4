var myRange = function(start, end) {
  if(start === end) {
    return end;
  }
  return [start].concat(myRange(start+1, end));
};

var sumRec = function(arr) {
  if(arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.splice(1));
};

var exponent = function (base, exp) {
  if (base === 0) {
    return 1
  }

  if (exp === 1) {
    return base
  }
  if (exp % 2 === 0) {
    return exponent(base, (exp / 2)) ** 2
  };

  if (exp % 2 !== 0) {
    return base * (exponent(base, (exp - 1) /2) ** 2)
  }
};

var rexponent =  function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * rexponent(base, exp - 1);
};

var fibonacci = function(n) {
  if (n === 1) {
    return [0]
  }
  if (n === 2) {
    return [0,1]
  }

  fib = fibonacci(n-1) + fibonacci(n-2)
  return fibonacci(n-1).concat(fib)
}
