const cacheName = "site_cache_v1";

const assetsToCache = [
    "/",
    "index.html"
]

self.addEventListener( 'install', (event) => {
    event.waitUntill(
        caches.open(cacheName) // creates a new cache obj (if not exists already), then passes it to a function to do something with it
        .then((cache) => {  
            return cache.addAll(assetsToCache); // all the assests like the html page, css styles, scripts are added to the cache object
        })
    );
});


self.addEventListener( 'activate', (event) => {
    event.waitUntill(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

