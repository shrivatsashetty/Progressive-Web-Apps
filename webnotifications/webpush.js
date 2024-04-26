const webpush = require('web-push');

let vapidKeys = webpush.generateVAPIDKeys();

console.log(vapidKeys);