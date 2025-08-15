// both debouncing and throttling are used to limit function call/ api call on some event happen
// let suppose there is a search bar
//debouncing: it will call api if difference between two keypress is more than certain time duration
// throttling: It calls api on certain time interval
let flag=true;
function throttling(event){
        if(flag)
        {
            console.log(event.key);
            flag=false;
            setTimeout(() => {
                flag=true;
            }, 1000);
        }
    
}
