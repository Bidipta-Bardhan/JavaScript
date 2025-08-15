// Call Concept
const name1={
    firstName: "Bidipta",
    lastName: "Bardhan",
    printName: function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
name1.printName();

const name2={
    firstName: "Kartik",
    lastName: "Aryan"
}

// function borrowing
// we can use the function of one object with the data of other object
name1.printName.call(name2);

// also we can do stuff like
const name3={
    firstName: "Siddhart",
    lastName: "Shukla"
}
const name4={
    firstName: "Parth",
    lastName: "Samthan"
}
let printfullName=function(hometown,hobby){
    console.log(this.firstName+" "+this.lastName+" "+hometown+ " "+hobby);
}
// the first argument will always be the reference to the this variable
// from second argument onwards it can be reference to the parameter of function
printfullName.call(name3,"Mumbai","Cricket");


// the only difference between call and apply method is how we send the argument
// in case of apply we send it in list format
printfullName.apply(name4,["Ahmedabad", "Singing"]);

// for bind method it returns a function which can be invoked later
// it does not call the function
const printLater=printfullName.bind(name3,"Mumbai","Cricket");
console.log(printLater);
printLater();