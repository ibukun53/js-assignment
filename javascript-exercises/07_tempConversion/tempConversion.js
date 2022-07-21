const ftoc = (fahrenheit) => {
  fTemp =fahrenheit;
   const ftoCel = (fTemp -32) * 5/9;
  return Math.round(ftoCel * 10) / 10;
}
ftoc(32);
ftoc(100);
ftoc(-100);

const ctof = celsius => {
  cTemp = celsius;
  const ctofah = cTemp * 9/5 +32;
   return Math.round(ctofah * 10) / 10;
};
ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
