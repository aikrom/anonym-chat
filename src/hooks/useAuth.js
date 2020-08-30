import { useState, useEffect } from 'react';
import { auth as firebaseAuth } from '../services/firebase';

/**
 * Hook for anonymously authentificate user to firebase
 * @typedef {Object} user - Firebase Authentificated user
 * @typedef {(boolean|null)} authError
 * @returns {[user, authError]} Authentificated User and auth error state
 */
export const useAuth = () => {
	const [authError, setAuthError] = useState(false);
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		firebaseAuth()
			.signInAnonymously()
			.catch(() => {
				setAuthError(true);
			});

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
