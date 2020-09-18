 
/******************************************** What is Promises? ********************************** */
/**Promises are used to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations 
where callbacks can create callback hell leading to unmanageable code*/

/** Creating the promise**/
var promis= new Promise((resove,reject)=>{
                                          var temp=100;
                                          if(temp<200)
                                                setTimeout(() => {
                                                      resove( "YES RESOLVE");/*** resovling the promis when condition true***/    
                                                 }, 3000); 
                                           else
                                               reject("Reject");/***  reject the promise when condition flase**/
           });/*** Promise created **/


/** Handling the Promise**/
promis.then(res=>{
                   console.log(res);/** handling the resoved promise**/
           })
      .catch((error)=>{
                   console.log(error);/*** handling the rejected promise**/
            });

/****  
  Promise was created with new keyword and assign with variable promis, 
  In above code we explicitly resolve and reject the promise but in real world that may be API calls, 
  promis reference variable has pointed to promise{Created with new promise} using that variable we can handel the promise,
  Promise only handel Resolve OR reject at a time [promise is like a 0 or 1 {either catch or then }],
  In the above example only resoved promise will going to wait for 3sec **/ 











/*** Function hoisting and variable hoisting */
//  var x=function fun(){
//     console.log("I am function");
// }
// x();

// y();

// function y(){
//     console.log("HAi I am y")
// }

// /*** modules  */
// var v=require("./javScript/first.js");
// console.log(v.area(7,3));
// console.log(v.area1(7,3));

 