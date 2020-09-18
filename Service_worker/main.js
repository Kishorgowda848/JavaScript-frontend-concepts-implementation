 
if('serviceWorker' in navigator){
  console.log("serviceWorker supported for this browser");
  window.addEventListener('load',()=>{
      navigator.serviceWorker.register('serviceworker1.js').
      then(()=>{
          console.log("Registred")
      }).catch((e)=>console.log(e));
  })
}
