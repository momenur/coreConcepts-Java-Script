function fooBar(number){
    const numbers = [];
    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 ===0){
            numbers.push('foobar');
        }
        else if(i % 5 === 0){
            numbers.push('bar');
        }
        else if(i % 3 === 0){
            numbers.push('foo');
        }
        else{
            numbers.push(i);
        }
    }
    return numbers;
}
const myFooBarArray = fooBar(50);
console.log(myFooBarArray);