import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref,uploadBytes  } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVIZOE2djmJEWzNHRB9XyleP3Xxga1HOo",
    authDomain: "react-course-may22.firebaseapp.com",
    projectId: "react-course-may22",
    storageBucket: "react-course-may22.appspot.com",
    messagingSenderId: "728614069458",
    appId: "1:728614069458:web:7d203394c0c0e0d282f90b"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
// Get a reference to use auth
firebase.auth = firebase.auth();
// Get a reference to save information
firebase.db = firebase.firestore();
// Get a reference to the storage service
export const storage = getStorage();
firebase.storageRef = ref;
//Agrega  archivo
firebase.uploadBytes = uploadBytes;

export default firebase;



