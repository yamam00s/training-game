import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcSbju_fsvhpm9BkTRnbklzNvYPXpkCGI',
  authDomain: 'training-game-12576.firebaseapp.com',
  databaseURL: 'https://training-game-12576.firebaseio.com',
  projectId: 'training-game-12576',
  storageBucket: 'training-game-12576.appspot.com',
  messagingSenderId: '890930690403',
  appId: '1:890930690403:web:035c6e914a81b319'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export default db
