//Function currying is a technique in JavaScript (and other functional programming languages) 
// where a function is transformed into a sequence of functions, each taking a single argument.

// without function currying
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

//with function currying
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

console.log(curriedAdd(2)(3));

// mordern syntax
const curriedAddNew = a => b => a + b;
console.log(curriedAddNew(2)(3)); 