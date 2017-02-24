function sum () {
  let accSum = 0;
  for (let i = 0; i < arguments.length; i++) {
    accSum += arguments[i];
  }
  return accSum;
}

const sum1 = function () {
  let accSum = 0;
  debugger;
  for (let i = 0; i < arguments.length; i++) {
    accSum += arguments[i];
  }
  return accSum;
};

// TODO: Why doesn't this work? `arguments` does not recognize 1, 2...
const sum2 = (num) => {
  let accSum = 0;
  debugger;
  for (let i = 0; i < arguments.length; i++) {
    accSum += arguments[i];
  }
  return accSum;
};

// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));

const sum3 = (...nums) => {
  let accSum = 0;
  for (let i = 0; i < nums.length; i++) {
    accSum += nums[i];
  }
  return accSum;
};

const sum4 = (...nums) => {
  let accSum = 0;
  nums.forEach( el => accSum += el );
  return accSum;
};

function sum5 (...nums) {
  let accSum = 0;
  nums.forEach(function (el) {
    accSum += el;
  });
  return accSum;
}




console.log(sum5(1, 2, 3, 4));
console.log(sum5(1, 2, 3, 4, 5));
