// CMD
// console.log('Hello from Node');
// Global variables should use VAR
// var name = 'OBrien McQuade';
// var age = 32;
// var average = 12.333;
// var found = true;
// LET lives inside {} only. cannot access them outside of the curly braces (Block of Code)
// let another = 'aasasd';

// function test(){
//     var a = 1;
//     console.log('This is a function');

//     for(let i=0; i< 10; i++){
//         var b = 2;
//         let y = 2;
//         console.log(i);
//     }
// }

// function sayHello(name){
//     console.log('Hi there, '+ name);
// }

// test();
// sayHello('Buddy');
// sayHello(name);

var mathLib = require('./mymath');

var evens = [] // put all even numbers here


// print numbers 1-10 except 3 and 7
function exc1(){
    for(let i=1; i <=10; i++){
        if (i != 3 && i != 7){
            console.log(i);
        }
        
    } 
}

// will put n even numbers inside the array
function exc2(howMany){
    for(let i=0; i < (howMany * 2); i++){
        
        if(mathLib.isEven(i)){
            console.log('even: '+ i);
            evens.push(i);
        }
    }
}



exc1();
exc2(10);
var res = mathLib.divide(12,8);
console.log(res);

var two = mathLib.divide(42,0);
console.log(two);