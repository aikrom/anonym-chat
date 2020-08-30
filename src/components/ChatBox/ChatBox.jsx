import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRandomColor } from '../../helpers/generateColors';
import { MessageItem } from '../MessageItem';
import './chatBox.css';

/**
 * Chat box component
 * @param {array} messages - array of messages objects
 * @param {function} onWriteMessage - Function to write data into database
 * @returns {JSX.Element} React function component
 */
export const ChatBox = ({ messages, onWriteMessage }) => {
	const messageBoxRef = useRef(null);
	const [messageValue, setMessageValue] = useState('');
	const [messageColor, setMessageColor] = useState(null);

	useEffect(() => {
		messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
	}, [messages]);

	const submitHandle = (e) => {
		e.preventDefault();

		const color = messageColor || getRandomColor();

		if (!messageColor) {
			setMessageColor(color);
		}

		onWriteMessage({ message: messageValue, color });

		setMessageValue('');
	};

	return (
		<div className="chat-box chat-box--default">
			<div className="chat-box__messages" ref={messageBoxRef}>
				{messages.length
					? messages.map((item) => (
							<MessageItem
								key={item.key}
								color={item.color}
								message={item.msg}
								date={item.date}
							/>
					  ))
					: null}
			</div>
			<div className="chat-box__bottom">
				<form onSubmit={submitHandle}>
					<div className="chat-box__form">
						<input
							type="text"
							placeholder="Write your message"
							className="chat-box__input"
							value={messageValue}
							onChange={(e) => setMessageValue(e.target.value)}
						/>
						<button type="submit" className="chat-box__submit-btn">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

ChatBox.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string.isRequired,
			msg: PropTypes.string.isRequired,
			date: PropTypes.number.isRequired,
			key: PropTypes.string.isRequired,
		}),
	).isRequired,
	onWriteMessage: PropTypes.func.isRequired,
};

export default ChatBox;
