importScripts(
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyCDpKF59MATfa-JaGF9yOBvHyi8i__3CFc",
    authDomain: "bindass-karate-do-academy.firebaseapp.com",
    projectId: "bindass-karate-do-academy",
    storageBucket: "bindass-karate-do-academy.firebasestorage.app",
    messagingSenderId: "360953215088",
    appId: "1:360953215088:web:c4399bcd991abf98229cb5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

    console.log(
        "[firebase-messaging-sw.js] Background message:",
        payload
    );

    const title =
        payload.notification?.title ||
        "BKDA Notice";

    const options = {
        body:
            payload.notification?.body ||
            "You have a new notice from Bindass Karate Do Academy.",
        icon: "/bindass-karate-do-academy/icon-192.png",
        badge: "/bindass-karate-do-academy/icon-192.png",
        data: payload.data || {}
    };

    self.registration.showNotification(title, options);
});