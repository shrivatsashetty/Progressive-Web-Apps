const cacheName = "site-cache-v1"
const assetsToCache = ["/", "/index.html"]

self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assetsToCache)
        }).catch(err => {
            console.log(err)
        })
    );
});

self.addEventListener('activate', (event)=>{
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assetsToCache)
        }).catch(err => {
            console.log(err)
        })
    );
});

