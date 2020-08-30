import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MessageItem } from '../MessageItem';
import './messageBox.css';

/**
 * Messages box component
 * @param {array} messages - array of messages objects
 * @returns {JSX.Element} React function component
 */
export const MessageBox = ({ messages }) => {
	const messageBoxRef = useRef(null);

	useEffect(() => {
		messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
	}, [messages]);

	return (
		<div className="message-box message-box--default">
			<div className="message-box__messages" ref={messageBoxRef}>
				{messages &&
					messages.map((item) => (
						<MessageItem
							key={item.id}
							color={item.color}
							bg={item.bg}
							message={item.msg}
							time={item.time}
						/>
					))}
			</div>
			<div className="message-box__bottom">
				<form>
					<div className="message-box__form">
						<input type="text" placeholder="Write your message" className="message-box__input" />
						<button type="submit" className="message-box__submit-btn">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

MessageBox.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string.isRequired,
			bg: PropTypes.string.isRequired,
			msg: PropTypes.string.isRequired,
			time: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default MessageBox;
