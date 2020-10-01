import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDfOdsvJXg7PMgww4yKtS7gbfM8c_Ew5mE',
	authDomain: 'clone-ds.firebaseapp.com',
	databaseURL: 'https://clone-ds.firebaseio.com',
	projectId: 'clone-ds',
	storageBucket: 'clone-ds.appspot.com',
	messagingSenderId: '853208315807',
	appId: '1:853208315807:web:c82f7cfff7114c82626faa',
	measurementId: 'G-GZHLKBYXXQ',
};

// Set up firebase configurations
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creates a db for file storage
const db = firebaseApp.firestore();

// allows for user authentication
const auth = firebase.auth();

export { db, auth };
