import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDZb5XR2CyihU5cHAdleGG7NydYgyqbqNM",
authDomain: "arjun-firegram.firebaseapp.com",
projectId: "arjun-firegram",
storageBucket: "arjun-firegram.appspot.com",
messagingSenderId: "1343521423",
appId: "1:1343521423:web:b7b67067b3c459b35c66fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};