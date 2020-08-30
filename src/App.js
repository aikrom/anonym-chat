import React from 'react';
import { useAuth } from './hooks';
import { MessageBox } from './components/MessageBox';
import './styles/index.css';

export const App = () => {
	const [auth, authError] = useAuth();

	if (authError) {
		return <div className="app">Auth error</div>;
	}

	if (!auth) {
		return <div className="app">Create authentificate connection...</div>;
	}

	return (
		<div className="app">
			<MessageBox />
		</div>
	);
};

export default App;
