/**
 * A module that configure Firebase connection
 * @module firebase
 */

import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDy0df5WNi2MEwKgDbPqSK4MHsw-4QOWRo',
	authDomain: 'anonym-chat-a20ef.firebaseapp.com',
	databaseURL: 'https://anonym-chat-a20ef.firebaseio.com',
	projectId: 'anonym-chat-a20ef',
	storageBucket: 'anonym-chat-a20ef.appspot.com',
	messagingSenderId: '837321916879',
	appId: '1:837321916879:web:c1cff17f97e5a6742512ba',
};

firebase.initializeApp(firebaseConfig);

/* Firebase auth function */
export const { auth } = firebase;

/* Firebase database function */
export const db = firebase.database();
