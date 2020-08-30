import { useState, useEffect } from 'react';
import { db } from '../services/firebase';

export const useMessages = () => {
	const [messages, setMessages] = useState([]);
	const [readError, setReadError] = useState(false);
	const [writeError, setWriteError] = useState(false);

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
