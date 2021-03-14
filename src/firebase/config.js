import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCMNuRRgn2uMY4kC89aa_gbUJ6_bW85SZA",
	authDomain: "music-playlist-7b15f.firebaseapp.com",
	projectId: "music-playlist-7b15f",
	storageBucket: "music-playlist-7b15f.appspot.com",
	messagingSenderId: "301506379339",
	appId: "1:301506379339:web:4e58d69bd58b14ba1ad7ce",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
