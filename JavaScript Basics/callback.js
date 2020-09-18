/**************************What is call back function?  *****/
/**A callback is a function that is to be executed after another function has finished executing  */
function a() 
{
    b(function fun(x){
        console.log(x)
    }); /** passing a parameter as function */
}

function b(callback){
setTimeout(() => callback(20), 2000);/** function b is waiting for 2sec  */
}
 
 a();/** calling the function a() */

 /*** conclusion:= called function a() has called another function b() requires 2sec to
  execute but javaScript does't wait for it beacuse javascript support Asynchronization */
  