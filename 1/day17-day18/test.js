var numbers = [1, 2, 3, 4, 5, 6, 7, 4, 2, 3];
var sum = numbers.reduce(function(prev,cur,index,array) {
    return prev+cur;
});
console.log(sum);//37
