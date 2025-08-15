// "use strict";
const welcome="Welcome to my documentation";
document.getElementById("welcomeText").innerText=welcome;

// Concept 1: This Keyword
/* this keyword in global space will always represent a global object */
/* Global Object: JS can run inside browser, node js , smart watch */
// so whereever js run - there is a js runtime environment
// inside browser global object is different similarly in node js global 
// object is different and so on
// incase of browser the global object is window
console.log(this);

// for function
function x(){
    // the value depends on strict / non strict mode
    // the value of this keyword inside a function is undefined
    // but javascript follows "this substitution" in non strict mode
    // so whenever this keyword is undefined or null it replace it with global object
    console.log(this);
}
x();
// the value of this keyword also depends on how the function is called
// the below will give global window object in both strict and non strict mode
window.x();

const student={
    name: 'Bidipta',
    printName: function(){
        console.log(this);
        console.log(this.name);
    }
}
// this keyword inside a method represent the object it is inside
// a method is a function present inside a object
student.printName();

const student2={
    name: 'Kartik'
}
student.printName.call(student2);

// this keyword in arrow function represents the lexical context in which
// it is enclosed
const student3={
    name: 'Parth',
    printName: ()=>{
        console.log(this);
    }
}
student3.printName();
// arrow function does not have their own binding it stores the value of 
// its lexical context
const student4={
    name: 'Siddharth',
    printName: function(){
        const y= ()=>{
            console.log(this);
        }
        y();
    }
}
student4.printName();