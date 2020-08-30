import React from 'react';
import { useAuth, useMessages } from './hooks';
import { MessageBox } from './components/MessageBox';
import './styles/index.css';

export const App = () => {
	const [auth, authError] = useAuth();
	const [messages, readError, writeError, writeMessage] = useMessages();

	const writeMessageHandle = (args) => {
		writeMessage({ ...args, uid: auth.uid });
	};

	if (authError) {
		return <div className="app">Auth error</div>;
	}

	if (!auth) {
		return <div className="app">Create authentificate connection...</div>;
	}

	if (readError || writeError) {
		return <div className="app">Database error...</div>;
	}

	return (
		<div className="app">
			<MessageBox messages={messages} onWriteMessage={writeMessageHandle} />
		</div>
	);
};

export default App;
