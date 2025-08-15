// when any event listner is attached to any element it goes through
// capturing/trickle down phase if useCapture is true
// or bubbling up phase if useCapture is false or not mentioned default

//Capture -> when child clicked
// grandparent-> parent -> child

// bubbling -> when child clicked
// child -> parent -> child

// we can use stop propagation to stop capturing down or bubbling up

// Example Bubble

// document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log('Grand Parent Clicked');
// })

// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('Parent Clicked');
// })

// document.querySelector('#child').addEventListener('click',()=>{
//     console.log('Child Clicked');
// })
document.querySelector('#eventBtn').addEventListener('click',(e)=>{
    console.log('Event Btn Clicked');
    e.stopPropagation();
})

// Example Capture

// document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log('Grand Parent Clicked');
// }, true)

// document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('Parent Clicked');
// }, true)

// document.querySelector('#child').addEventListener('click',()=>{
//     console.log('Child Clicked');
// }, true)

// document.querySelector('#eventBtn').addEventListener('click',(e)=>{
//     console.log('Event Btn Clicked');
//     e.stopPropagation();
// }, true)
