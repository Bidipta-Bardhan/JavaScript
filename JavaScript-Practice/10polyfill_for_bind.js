// Bind Example
function printDetails(homeTown, age){
    console.log(`I am ${this.firstName} ${this.secondName} from ${homeTown} and I am ${age} year's old`);
}
const obj1={
    firstName: 'Kartik',
    secondName: 'Aryan'
}
printDetailsKartik=printDetails.bind(obj1, 'Mumbai');
printDetailsKartik(30);

//Now instead of built-in bind method create your own bind method

Function.prototype.myBind=function(...args1){
    let obj=this;
    params=args1.slice(1);
    return function(...args2){
        obj.apply(args1[0],[...params, ...args2])
    }
}
printDetailsKartikBymyBind=printDetails.myBind(obj1, 'Mumbai');
printDetailsKartikBymyBind(30);