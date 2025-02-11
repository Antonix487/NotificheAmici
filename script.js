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
