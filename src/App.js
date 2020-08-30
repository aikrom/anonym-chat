import React from 'react';
import { useAuth, useMessages } from './hooks';
import { ChatBox } from './components/ChatBox';
import './styles/index.css';

/**
 * Main app component
 * @returns {JSX.Element} Returns react function component
 */
export const App = () => {
	const [auth, authError] = useAuth();
	const [messages, readError, writeError, writeMessage] = useMessages();

	/**
	 * This function just add user id into arguments
	 * @typedef {Object} Message
	 * @property {string} color - message background color
	 * @property {string} message - message string
	 * @param {Message} args
	 */
	const writeMessageHandle = (args) => {
		writeMessage({ ...args, uid: auth.uid });
	};

	if (authError) {
		return <div className="app">Session authentification error</div>;
	}

	if (!auth) {
		return <div className="app">Creating session authentificion...</div>;
	}

	if (readError || writeError) {
		return <div className="app">Some error on database</div>;
	}

	return (
		<div className="app">
			<ChatBox messages={messages} onWriteMessage={writeMessageHandle} />
		</div>
	);
};

export default App;
