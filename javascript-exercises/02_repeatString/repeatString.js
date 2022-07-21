const repeatString = function(string,times) {
if (times> 0){
    return string.repeat(times);
}else if (times< 0){
    return 'ERROR';
}else{
    return '';
}
};
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', 1000);
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
