import { useState, useEffect } from 'react';
import { db } from '../services/firebase';

/**
 * Hook to work with messages on database
 * @typedef {array} messages - Messages array from database
 * @typedef {boolean} readError - Read error status
 * @typedef {boolean} writeError - Write error status
 * @typedef {function} writeMessage - Write message to database function
 * @typedef {function} readMessages - Read messages from database function
 * @returns {[messages, readError, writeError, writeMessage, readMessages]}
 * 	- Returns states and functuions to work with database
 */
export const useMessages = () => {
	const [messages, setMessages] = useState([]);
	const [readError, setReadError] = useState(false);
	const [writeError, setWriteError] = useState(false);

	/**
	 * Function to write data inti database
	 * @typedef {Object} Message - Message properties object
	 * @property {string} message - Message string
	 * @property {string} color - Message background color (hex)
	 * @property {string} uid - Firebase authentificated user id
	 * @param {Message} - Object of { message, color, uid }
	 */
	const writeMessage = async ({ message, color, uid }) => {
		try {
			setWriteError(false);

			await db.ref('messages').push({
				msg: message,
				color,
				uid,
				date: Date.now(),
			});
		} catch (error) {
			setWriteError(true);
		}
	};

	/**
	 * Function to read messages from database
	 */
	const readMessages = async () => {
		try {
			const messagesRef = await db.ref('messages');

			messagesRef.on('value', (snapshot) => {
				const snapMessages = [];

				snapshot.forEach((snap) => {
					const value = snap.val();
					const { key } = snap;
					snapMessages.push({ ...value, key });
				});

				setMessages(snapMessages);
			});
		} catch (error) {
			setReadError(true);
		}
	};

	useEffect(() => {
		readMessages();
	}, []);

	return [messages, readError, writeError, writeMessage, readMessages];
};

export default useMessages;
