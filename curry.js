const sumNums = (nums) => {
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

console.log(sumNums.myCurry(3)(4)(20)(6));
