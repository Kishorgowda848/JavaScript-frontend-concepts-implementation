function callMyAPI(url){
let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if(this.status==200 && this.readyState==4){
     let bucket=JSON.parse(this.response).slice(4980);
     console.log(bucket)
      displayData(bucket);
    }else{
    //    alert("Offline")
    }
  };
   request.open("GET", url, true);
   request.send(null);
}

function displayData(data){
    for(let i=0;i<data.length;i++){
       const img=document.createElement("img");//<img></img>
       img.setAttribute("src",data[i].thumbnailUrl);//<img src="http://urllink"></img>

       document.getElementById('container').appendChild(img);

       const ptag= document.createElement("p");//<p></p>
       const title=document.createTextNode(data[i].title);// I am descrip

       ptag.appendChild(title);//<p>I am descrip</p>

       document.getElementById('container').appendChild(ptag);
    }
}

window.addEventListener('load',()=>{
    this.callMyAPI("https://jsonplaceholder.typicode.com/photos");
 })

 // Var keyword has global Or Function scope,it can be re-declared inside its scope

function varGlobalScope(){
    var y=90;  // declare 
    if(true){
        console.log(y); // 90
    }
    var y=89;//re-declare 
    console.log(y) //89
}
varGlobalScope();
 

// let keyword has Block scope,It can't be re-declared and can't access out of block  

 function letRedeclare(){
     if(true){ 
       let y=25;
       console.log(y); // 25
       let y=90;  //Uncaught SyntaxError: Identifier 'y' has already been declared
    }
 }

 function letOutsideOfBlock(){
    if(true){
        let x=90;
        console.log(x)//90
    }
    console.log(x);// Uncaught ReferenceError: x is not defined
 }

// Const behave same as let but you can't change the value once you assign.
// Note :I have put try and catch block because it should continue the exitution when exception occurs 
function letOutsideOfBlock(){
    if(true){
        const x=90;
        console.log(x) //90
        try{
            x=78;
        }catch(error){
            console.log(error)// TypeError: Assignment to constant variable.
        }
        console.log(x)//90
    }
    console.log(x);// Uncaught ReferenceError: x is not defined
 }

