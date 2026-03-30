import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWFGfuh4NMze8qxGViDMkJNkbcBlDpedo",
    authDomain: "zepfter-pharma-app.firebaseapp.com",
    projectId: "zepfter-pharma-app",
    storageBucket: "zepfter-pharma-app.firebasestorage.app",
    messagingSenderId: "472585709938",
    appId: "1:472585709938:web:49551e599821057c5595eb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);