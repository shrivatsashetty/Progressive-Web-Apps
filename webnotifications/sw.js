// make the window object to listen for the push event to happen
self.addEventListener('push', () => {
    // make the sw object to send the notification
    self.registration.showNotification('Hello World', options);
})