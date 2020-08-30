import { useState, useEffect } from 'react';
import { auth as firebaseAuth } from '../services/firebase';

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
