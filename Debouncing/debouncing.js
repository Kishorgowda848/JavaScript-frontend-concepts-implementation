document.getElementById('mybutton')
        .addEventListener('click',debounce(()=>{
			console.log("button clicked");
		},2000));
		/** adding @click event listner ,calling a function when ever click event happens **/
		/** debounce function requires function and delay has a parameter**/

function debounce(fun,delay){
	/** fun is a function as a parameter,delay is also parameter **/
	let setInter;
    return function(...args){
       	/** this is like a clousers ...args are parametre of fun **/
  	    clearTimeout(setInter);/* To clear the privesly trigered event when less than delay**/
 	    setInter=setTimeout(()=>{/*** executing the parameter function with delay of 2sec**/
	                                 fun(...args);
				             },delay);
	}
}
