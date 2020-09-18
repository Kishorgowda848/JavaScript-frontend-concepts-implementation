/***Throttling will change the function in such a way that it can be fired at most once in a regular time interval.***/
document.getElementById('mybutton')
        .addEventListener('click',throttling(()=>{
			console.log("button clicked");
		},2000));
		/** adding @click event listner ,calling a function when ever click event happens **/
		/** debounce function requires function and delay has a parameter**/
function throttling(fun,delay){
	/** fun is a function as a parameter,delay is also parameter **/
	let last=0;
    return function(...args){
       	/** this is like a clousers ...args are parametre of fun **/
       	/* First event should triggered **/
  	    let now=new Date().getTime();/** getting the timings */
   	    if(now-last<delay)/**ingonre the triggered event less than delay*/
  	    	return 
  	    else{
  	    	last=now;/** exitute the event every**/
  	    	return fun(...args);
  	    }
	}
}
