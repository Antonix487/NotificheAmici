window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "83c48a06-08e6-47f3-bba6-980e8490aac0",  // Sostituisci con il tuo appId corretto
  });
});


  // Impostare il pulsante per consentire le notifiche
  document.getElementById("notifyBtn").addEventListener("click", function() {
    OneSignal.push(function() {
      OneSignal.registerForPushNotifications();
    });
  });

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/NotificheAmici/OneSignalSDKWorker.js')
        .then(function(registration) {
            console.log('Service Worker registrato con successo:', registration);
        })
        .catch(function(error) {
            console.log('Errore nella registrazione del Service Worker:', error);
        });
} else {
    console.log('Service Worker non supportato dal browser.');
}
