const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  let add = 0;
  for( let i = 0; i < array.length; i++){
    add += array[i];
  }
  return add;
};

const multiply = function(array) {
  let product = 0;
  for( let i = 0; i < product.length; i++){
    product *= array[i];
  }
  return product;
};


const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if(n === 0 || n === 1){
    return  1;
  }else{
    return n* factorial(n-1);
  }
};
add(2,2);
add(2,6);
subtract(10,4);
sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);
multiply([2,4]);
multiply([2,4,6,8,10,12,14]);
power(4,3);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
