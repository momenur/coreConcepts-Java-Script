// var numbers = [10, 15, 20];
// var sum = 0;
// for(i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum);
function Array_avg(arrayName){
    var sum = 0;
    for(i = 0; i < arrayName.length; i++){
        sum +=arrayName[i];
    }
    return sum;
}
var numbers =[ 20, 30, 40];
var retuenValue = Array_avg(numbers);
console.log(retuenValue);