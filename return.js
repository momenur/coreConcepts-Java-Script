// function add(num1, num2){
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     console.log(sum);
//     return sum;
// }

// var total = add(20, 30);
// console.log('Total', total);
function bringShingara(money){
    var price = 10;
    var quantity = money / price;
    return quantity;
}
var myTaka = 150;
var sinGaras = bringShingara(myTaka);
console.log('Singras khabo:', sinGaras);