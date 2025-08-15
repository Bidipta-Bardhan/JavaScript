// async function always return a promise
// either you return a promise yourself or the function will wrap the value
// inside a promise and will return it

// Example1: returning value

async function getData(){
    return 'Hi I am Dubi';
}

const dataPromise=getData();
dataPromise.then((res)=>{
    console.log(res);
})

// Example2: returning promise
async function getDetails() {
    return new Promise((resolve,reject)=>{
        resolve('Dubi called');
    })
}
const dataPromise2=getDetails();
dataPromise2.then((res)=>{
    console.log(res);
})

// await is a keyword which can only be used inside a async function
// when we write await keyword inside a promise it resolves the promise

//Basic example: 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('resolved promise1');
    },10000)
    
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('resolved promise2');
    },5000)
    
});
// below is promise implementation: Time Tide and JS wait for none
// function getPromise() {
//     promise1.then((res) => console.log(res));
//     console.log('Promise Example');
// }

// getPromise(); 

// async await implementation : Over the execution waits till await resolution is complete

async function getAsync(){
    const val1=await promise1;
    console.log(val1);
    console.log('Async Await Example1')
    const val2=await promise2;
    console.log(val2);
    console.log('Async Await Example2')
}

getAsync()