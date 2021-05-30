import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAIy-sGpYmEVVZrxASWmFvKByepIA6s6SI",
  authDomain: "tesla-clone-v2.firebaseapp.com",
  projectId: "tesla-clone-v2",
  storageBucket: "tesla-clone-v2.appspot.com",
  messagingSenderId: "763943317538",
  appId: "1:763943317538:web:bb7b51a891aa724765da7b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export  { auth }
