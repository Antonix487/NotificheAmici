OneSignal.push(function() {
  OneSignal.init({
    appId: "YOUR_APP_ID", // Inserisci il tuo appId qui
  });

  // Impostare il pulsante per consentire le notifiche
  document.getElementById("notifyBtn").addEventListener("click", function() {
    OneSignal.push(function() {
      OneSignal.registerForPushNotifications();
    });
  });
});
