function odd_even(number){
    var check = number % 2;
    if(check == 0){
        var result = 'This is Even Number';
    }
    else{
        var result = ' This is Odd Number';
    }
    return result;
}
var num = 33;
var retuenValue = odd_even(num);
console.log(retuenValue);