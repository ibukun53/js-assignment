const reverseString = function(myString) {

 return myString.split('').reverse().join('');

};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
const removeFromArray = function(array, value) {
    return array.filter(el => el !== value);  
};
// Do not edit below this line
module.exports = reverseString;
