import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrrToknRjCwBQGTOgAgaqtYSLWlj49bUw",
  authDomain: "fb-mern-clone-42fca.firebaseapp.com",
  projectId: "fb-mern-clone-42fca",
  storageBucket: "fb-mern-clone-42fca.appspot.com",
  messagingSenderId: "792801686899",
  appId: "1:792801686899:web:0cf4d987a8132ec9bb8106"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db