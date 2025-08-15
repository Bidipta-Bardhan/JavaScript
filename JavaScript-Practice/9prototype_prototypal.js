// Prototype and Prototypal are concepts ofinheritance in javascript.
// Inheritance concept in javascript is different from other languages.

// Prototype: whenever we create a array, object, function, some object gets attached to it which have some
// inherent properties, methods this is know as prototype.
// we can see all these hidden properties using __proto__ with objects, arrays, functions, variables etc

const arr=[1, 2, 3, 4]
// arr.__proto__=Array.prototype
// arr.__proto__.__proto__=Object.prototype
// arr.__proto__.__proto__.__proto__=null

// Similarly
function fn(){
    console.log('a');
}
// fn.__proto__=Array.prototype
// fn.__proto__.__proto__=Object.prototype
// fn.__proto__.__proto__.__proto__=null

const obj1={
    name: 'Bidipta',
    age: 25,
    getIntro: function() {
        console.log(`Hi I am ${this.name} and I am ${this.age} year's old`);
    }
}
// obj.__proto__.__proto__=Object.prototype
// obj.__proto__.__proto__.__proto__=null

// There is a saying everything in javascript is a object.

// Example1: Never do this it causes performance issue

const obj2={
    name: 'Kartik'
}

obj2.__proto__=obj1;
console.log(obj2.getIntro());

//Example2

Function.prototype.myBind=function(){
    console.log('This is my custom function/method added to function prototype');
}
function fn(){

}
console.log(fn.myBind())