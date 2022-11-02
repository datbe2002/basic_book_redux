// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSlhfOhN63CSWMprRT_zNUEv-kMLxuIO0",
    authDomain: "employee-management-52307.firebaseapp.com",
    projectId: "employee-management-52307",
    storageBucket: "employee-management-52307.appspot.com",
    messagingSenderId: "239195289171",
    appId: "1:239195289171:web:ce6295c7d50557a5b5f8a6",
    measurementId: "G-8STJHTXLZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();