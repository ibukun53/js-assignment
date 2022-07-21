const leapYears = function(years) {
if(years / 4 && years / 400){
    return true;
} else if (years / 100){
    return false
} else {
    return '';
}
};
leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
