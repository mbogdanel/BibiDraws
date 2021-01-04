import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD32C32DunzgnlaoLMZ2Xc8LbyYW0VNReg',
  authDomain: 'bibidraws-727d7.firebaseapp.com',
  projectId: 'bibidraws-727d7',
  storageBucket: 'bibidraws-727d7.appspot.com',
  messagingSenderId: '587765096365',
  appId: '1:587765096365:web:a0571b1fd1a12d07c70b24',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timestamp }
