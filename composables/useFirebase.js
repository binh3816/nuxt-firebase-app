import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkG7KbXgzM2EUZnBMn29PDD89ENcZY_zw",
  authDomain: "tutorial-78fbb.firebaseapp.com",
  projectId: "tutorial-78fbb",
  storageBucket: "tutorial-78fbb.appspot.com",
  messagingSenderId: "215273477176",
  appId: "1:215273477176:web:c0fb45e77d84aaf68782cd",
};

export default function useFirebase() {
  if (getApps().length === 0) {
    initializeApp(firebaseConfig);
  }
}

