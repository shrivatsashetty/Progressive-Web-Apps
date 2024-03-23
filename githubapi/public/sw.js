(
    function(){
        self.addEventListener('install', event => {
            console.log('Service worker is installing...');
            event.waitUntill(
                caches.open('PWD_app').then(caches=> caches.addAll(
                    ['/git']
                ))
            )
        })
    }
)