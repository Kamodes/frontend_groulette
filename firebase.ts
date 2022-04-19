import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseAPP = firebase.initializeApp({
  apiKey: process.env.,
  authDomain: process.env.,
  projectId: process.env.,
  storageBucket: process.env.,
  messagingSenderId: process.env.,
  appId: process.env.
}
)