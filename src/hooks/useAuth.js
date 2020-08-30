import { useState, useEffect } from 'react';
import { auth as firebaseAuth } from '../services/firebase';

/**
 * Hook for anonymously authentificate user to firebase
 * @typedef {Object} user - Authentificated user data
 * @typedef {(boolean|null)} authError - Authentification error status
 * @returns {[user, authError]} Returns authentificated user data and auth error state
 */
export const useAuth = () => {
	const [authError, setAuthError] = useState(false);
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		// Auth anonymously
		firebaseAuth()
			.signInAnonymously()
			.catch(() => {
				setAuthError(true);
			});

		// Save auth data into state
		firebaseAuth().onAuthStateChanged((user) => {
			if (user) {
				setAuth(user);
			} else {
				setAuth(null);
			}
		});
	}, []);

	return [auth, authError];
};

export default useAuth;
