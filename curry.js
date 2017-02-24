const sumNums = (...nums) => {
  // debugger;
  return nums.reduce( (acc, num) => ( acc + num ));
};


let curriedSum = (numArgs) => {
  let numbers = [];

  const _curriedSum = (newNum) => {
    numbers.push(newNum);

    if (numbers.length === numArgs) {
      return sumNums(numbers);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.myCurry = function(numArgs) {
  let numbers = [];

  const _myCurry = (newNum) => {
    numbers.push(newNum);

    if (numbers.length === numArgs) {
      return this(numbers); //this refers to sumNums
    } else {
      return _myCurry;
    }
  };

  return _myCurry;
};

// console.log(sumNums.myCurry(3)(4)(20)(6));


Function.prototype.myCurryApply = function(numArgs) {
  let numbers = [];
  let that = this;
  function _myCurry (newNum) {
    numbers.push(newNum);

    if (numbers.length === numArgs) {
      return that.apply(null, numbers);
    } else {
      return _myCurry;
    }
  }

  return _myCurry;
};

console.log(sumNums.myCurryApply(3)(4)(20)(6));
