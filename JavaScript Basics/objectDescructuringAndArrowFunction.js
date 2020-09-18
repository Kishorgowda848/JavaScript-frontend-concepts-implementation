/******************************** what is Object Destructuring? ************************/
/*It’s a JavaScript expression that allows us to extract data from arrays, objects, maps and sets  */
/***
 * obj is an object with property  name, age and address
 */
var obj={
    name:"kishore",
    age:22,
    address:"Hassan"
}

/**Object destructring in ES6**/
let {name,age}=obj;
console.log(name,age);//output :- kishore 22

let arr=[9,0,10]
let [x,y]=arr;
console.log(x,y);//output:- 9 0

/*** I think above info is great enough***/

/******************************** Arrow Function?*************************/
/**There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.*/
 
 var data=()=> "Hello kishore";
 /** arrrow function has assigened the to data variable ,Arrow function returns String to that function  **/
console.log(data());/** printing the returned  String **/
