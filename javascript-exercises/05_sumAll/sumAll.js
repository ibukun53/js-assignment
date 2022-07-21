const sumAll = (num, range) => {
  let sum = 0;
  for(let i = num;  i >= range; i++ ){
     sum += i;
  };
  if(i <= range )
  return sum;
};
sumAll(1,6);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
