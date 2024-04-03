const cacheName = "site-cache-v1";

const assetsToCache = [
    /* this array contains the path of the resource files(html, css, js fiiles) to cache */
    "/",
    "index.html"
]

self.addEventListener('install', (event) => {
    event.waitUntill(
        caches.open(cacheName) // creates a new cache obj (if not exists already), then passes it to a function to do something with it
            .then((cache) => {
                return cache.addAll(assetsToCache); // all the assests like the html page, css styles, scripts are added to the cache object
            }).catch(err => {
                console.log("Regsitration failed due to following error", err)
            })
    );
});

// same process for activate event now
self.addEventListener('activate', (event) => {
    event.waitUntill(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assetsToCache);
        }).catch(err => {
            console.log("Regsitration failed due to following error", err)
        })
    );
});

