/*** copying  element  */
/**copying an one array from another array**/
var arr1=[1,2,3]
var arr2=[]
   arr2=arr1;
   arr2[1]=90;
console.log(arr1)//output :-1 90 3
console.log(arr2)//output :-1 90 3
/** you may expect diferent result but if you do like this only variable pointing that memory allocation **/

/************ We solve this by treversing whole original array and pushing each elements   *****************/ 
let array1=[1,2,3,4,5,6];
let array2=[];
for(let i=0;i<array1.length;i++){
   array2.push(array1[i]);
} 
array2[0]=10000;
console.log(array1)//output :- [1, 2, 3, 4, 5, 6]
console.log(array2)//output :- [10000, 2, 3, 4, 5, 6]

/*** ES6 way to do ***/
const a1=[1,2];
const a2=[3,4];
const a=[...a1,...a2];
console.log(a);//output:-[ 1, 2, 3, 4]

/***copying the object from another object***/
var obj1={
    a:1,
    b:2
}
var obj2={
    c:4
}
var output={...obj1,...obj2}
console.log(output);// output:-{ a: 1, b: 2, c: 4 }

/***copying the object with function**/
var obj={
    a:1,
    b:2,
    c:{...getdata()}
}
function getdata(){
 return  {x:4,y:6}
}
console.log(obj); // output:-{ a: 1, b: 2, c: { x: 4, y: 6 } }
