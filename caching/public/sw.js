const mainCacheName = 'site-cache-v1'

const cacheableAssets = [
    // "index.html",
    "success.html",
    "error.html",
    "gitppro.html"
]

self.addEventListener('install',(event) => {

    console.log("Service Worker installed");

    event.waitUntil(
        caches.open(mainCacheName)
        .then((cache) => {
            console.log("Service Worker: Caching Files")
            return cache.addAll(cacheableAssets);
        }).then( () => self.skipWaiting() )
    );
});

/* activation of service worker */
self.addEventListener('activate', (event) => { 
    console.log("Service worker activated!!!")
    // remove unwanted cache
    event.waitUntil(
        caches.keys()
            .then(cachedItems => {
                console.log( `caches available: ${cachedItems}` ); // usage of formatted string in javascript
                console.log("Deleting unwanted caches...");
                // return a promise object that will take the reponsiblity of clearing the unwanted caches
                return Promise.all(
                    cachedItems.map( cache => {
                        if (cache !== mainCacheName){
                            console.log("Service Worker Clearing cache: " + cache);
                            return caches.delete(cache); 
                            // caches is the inbuilt javascript object, cache is our iterator variable, don't confuse
                        }
                    })
                );

            })
            .then(self.skipWaiting())
            .catch(err => console.log(err))
    )
});

// offline loading is done in the fetch event
self.addEventListener('fetch', e => {
    console.log("Service Worker fetching from ", e.request);
    e.respondWith(
        fetch(e.request)
        // only thing that can go wrong with a fetch is network Error, i.e offline
            .catch( () => caches.match(e.request)  )
    );
} );