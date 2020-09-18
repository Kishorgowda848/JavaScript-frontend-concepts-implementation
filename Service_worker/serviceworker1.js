 
console.log("Hey self ......../ ",self)
/** Service worker is helps to cache the response and store it in the browser[Service worker] */
const cacheName="v1";
const cacheAsset=[
    "main.js",
    "index.html"
];/*** This is going to cache  */


/** Self is the url  Navigated to http://127.0.0.1:8887/ */
/** There are mainly 3 cycle in Service worker */
self.addEventListener("install",(e)=>{
     e.waitUntil(
         caches/** is the browser api */
         .open(cacheName)/** The cache name */
         .then((cache)=>{
        cache.addAll(cacheAsset);/***  cach is going to Add */
        })
        .then(()=>{
        self.skipWaiting();/**No more waite  */
        })
        .catch((e)=>console.log(e)));/*** if there any error occurs */
})


self.addEventListener("activate",(e)=>{
  console.log("Activate");
     e.waitUntil(
         caches.keys().then(cacheName=>{
            return Promise.all(
                cacheName.map(cache=>{
                    if(cache!=cacheName)
                      return caches.delete(cache)        
                })
            ) 
        })
    )
})

self.addEventListener("fetch",/** fetching the cached files during access */
   (e)=>{
       console.log(e)
      e.respondWith(
        fetch(e.request)
    )
})