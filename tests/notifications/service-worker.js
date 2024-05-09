self.addEventListener("push", function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        // icon: 'path/to/icon.png',
      };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
  });

self.addEventListener("notificationclick", function(event) {
    self.clients.openWindow("/notifications");
    event.notification.close();
    // Add custom handling for notification click event if needed
});
