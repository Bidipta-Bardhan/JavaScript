//debouncing is mostly used for searching scenarios such that api call does not happen in each keypress
// it should call api only if the delay between two keystrokes is more than some duration
counter=0;
function keypress(){
    console.log('keypressed', ++counter);
}
debouncingHelper=function(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn();
        },delay)
    }
}
const debouncing=debouncingHelper(keypress,1000);
