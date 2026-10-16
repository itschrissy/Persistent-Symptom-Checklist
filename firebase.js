import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqZqgaIDeovwcAsbP3z7vBK2YOFOIcamo",
  authDomain: "baas-week-5-symptom-checker.firebaseapp.com",
  projectId: "baas-week-5-symptom-checker",
  storageBucket: "baas-week-5-symptom-checker.firebasestorage.app",
  messagingSenderId: "329029316677",
  appId: "1:329029316677:web:57a8c4abb6afd7f6e9b32c",
  measurementId: "G-1M88H4XYJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getFirestore(app);

export {app, db}