// Event Delegation says: instead of having event listner attached to each child element we should attach,
//  it to parent to reduce complexity, as we now by event bubbling, the event listner will bubble up
//  from child to parent
// PROS: 
// It saves a lot of memory, we do not have to attach event listner to each child element
// Writing less and optimized code
// CONS: 
// All the events are not bubbled up there are some events like blur, focus, resize, scrolling etc,
//  which does not bubble up
// If we are using stop propogation in child event delegation will not work
document.querySelector('#categories').addEventListener('click', (e)=>{
    console.log(e.target);
    // navigate to id url
    window.location.href="/"+e.target.id
})
