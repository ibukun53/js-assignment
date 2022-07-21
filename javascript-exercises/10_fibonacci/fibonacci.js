const fibonacci = function(numbers) {
    let n1 = 0, n2=1, nextTerm, myStr= '';
    nextTerm = n1 + n2;
    while(nextTerm <= numbers){
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        nextTerm = myStr
    }
};
fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci("1");
fibonacci("2");
fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
