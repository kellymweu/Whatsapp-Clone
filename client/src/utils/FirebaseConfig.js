import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZR7ktLMLuGdYA_6-2JiRkzdPMCh6ZX6Q",
  authDomain: "whatsapp-clone-eafff.firebaseapp.com",
  projectId: "whatsapp-clone-eafff",
  storageBucket: "whatsapp-clone-eafff.appspot.com",
  messagingSenderId: "22652831345",
  appId: "1:22652831345:web:5e471e0fafa144ad79fdd0",
  measurementId: "G-XVRDH384CY",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
