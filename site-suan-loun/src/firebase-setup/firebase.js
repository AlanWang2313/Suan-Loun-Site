import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD98s_beaI1cf4AkPW-NamkEWnPJ4oOPEo",
  authDomain: "site-suan-loun-dev.firebaseapp.com",
  projectId: "site-suan-loun-dev",
  storageBucket: "site-suan-loun-dev.appspot.com",
  messagingSenderId: "322715829764",
  appId: "1:322715829764:web:429504d6fc3984b008d751"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)