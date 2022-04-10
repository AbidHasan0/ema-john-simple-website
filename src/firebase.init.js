// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDesq92y1PXcu4MyJ3KpkTMAIr3GCYgqnI",
   authDomain: "ema-john-simple-project-a3ba1.firebaseapp.com",
   projectId: "ema-john-simple-project-a3ba1",
   storageBucket: "ema-john-simple-project-a3ba1.appspot.com",
   messagingSenderId: "625687590809",
   appId: "1:625687590809:web:3e18cb12ee75597b944508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;