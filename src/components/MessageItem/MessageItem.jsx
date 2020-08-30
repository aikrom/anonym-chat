import React from 'react';
import PropTypes from 'prop-types';
import { getContrast } from '../../helpers/generateColors';
import { parseDate } from '../../helpers/parseDate';
import './messageItem.css';

/**
 * Messages box
 * @param {string} color - message background color
 * @param {string} message - message text
 * @param {number} time - message timestamp
 * @returns {JSX.Element} React function component
 */
export const MessageItem = ({ color, message, date }) => {
	const textColor = getContrast(color);
	const messageDatetime = parseDate(date);

	return (
		<div className="message-item">
			<div
				className="message-item__message"
				style={{ backgroundColor: color, color: textColor }}
			>
				<span>{message}</span>
				<div className="message-item__time" style={{ color: textColor }}>
					{messageDatetime}
				</div>
			</div>
		</div>
	);
};

MessageItem.propTypes = {
	color: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
};

export default MessageItem;
