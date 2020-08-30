import React from 'react';
import { useAuth } from './hooks';

export const App = () => {
	const [auth, authError] = useAuth();

	if (authError) {
		return <div>Auth error</div>;
	}

	return <div className="App">{auth ? auth.uid : 'Create authentificate connection...'}</div>;
};

export default App;
