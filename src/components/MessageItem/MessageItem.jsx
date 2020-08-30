import React from 'react';
import PropTypes from 'prop-types';
import './messageItem.css';

/**
 * Messages box
 * @param {string} color - message text color
 * @param {string} bg - message background color
 * @param {string} message - message text
 * @param {time} time - message timestamp
 * @returns {JSX.Element} React function component
 */
export const MessageItem = ({ color, bg, message, time }) => {
	return (
		<div className="message-item">
			<div className="message-item__message" style={{ backgroundColor: bg, color }}>
				<span>{message}</span>
				<div className="message-item__time" style={{ color }}>
					{time}
				</div>
			</div>
		</div>
	);
};

MessageItem.propTypes = {
	color: PropTypes.string.isRequired,
	bg: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};

export default MessageItem;
