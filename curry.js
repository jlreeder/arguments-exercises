const sumNums = (...nums) => {
  // debugger;
  return nums.reduce( (acc, num) => ( acc + num ));
};


let curriedSum = (numArgs) => {
  const numbers = [];

  const _curriedSum = (num) => {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return sumNums(...numbers);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56



Function.prototype.myCurry = function (numArgs) {
  const numbers = [];

  const _myCurry = (num) => {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return this(...numbers);
    } else {
      return _myCurry;
    }
  };

  return _myCurry;
};

// console.log(sumNums.myCurry(3)(4)(20)(6));


Function.prototype.myCurryApply = function(numArgs) {
  const numbers = [];

  const _myCurryApply = (num) => {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return this.apply(null, numbers);
    } else {
      return _myCurryApply;
    }
  };

  return _myCurryApply;
};

console.log(sumNums.myCurryApply(3)(4)(20)(6));
