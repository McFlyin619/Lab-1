
var mathLib = require('./mymath');

var evens = [] 
var odds = []

function exc1(){
    for(let i=1; i <=10; i++){
        if (i != 3 && i != 7){
            console.log(i);
        }
        
    } 
}

function even(howMany){
    for(let i=0; i < (howMany * 2); i++) {
        
        if(mathLib.isEven(i)){
            console.log('even: '+ i);
            evens.push(i);
        }
    }
}

function odd(howMany) {
    for (let i=0; i < (howMany * 2); i++) {
        if (mathLib.isOdd(i)) {
            console.log('odd: ' + i);
            odds.push(i);
        }
    }
}

function isGreater(num1,num2) {
    console.log('Bigger Number: ' + mathLib.greater(num1,num2));
}

function isSmaller(num1,num2) {
    console.log('SmallerNumber: ' + mathLib.smaller(num1,num2));
}

even(12);
odd(10);
isGreater(2,4);
isSmaller(10,32);





