// This file must live at the ROOT of your site (same folder as index.html),
// e.g. https://yourname.github.io/live-veil-wallet/firebase-messaging-sw.js
// It handles incoming push notifications while the app/tab isn't in focus.

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC-Hx86meaXo-lptSSuij5cnKi-DUXRSBs",
  authDomain: "veil-99263.firebaseapp.com",
  projectId: "veil-99263",
  storageBucket: "veil-99263.firebasestorage.app",
  messagingSenderId: "410710513338",
  appId: "1:410710513338:web:b2df379d940c68a92c1483"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{
  const title = (payload.notification && payload.notification.title) || 'Veil';
  const body = (payload.notification && payload.notification.body) || 'You received a payment.';
  self.registration.showNotification(title, {
    body,
    icon: '/icon.png' // optional — remove this line if you don't have one at that path
  });
});
