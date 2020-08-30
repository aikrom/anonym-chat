/**
 * Parse and format date
 * @param {number} datetime - Datetime
 * @returns {string} Formatted date
 */
export const parseDate = (date) => {
	const datetime = new Date(date);
	const today = new Date();

	const time = datetime.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
	});

	if (datetime.setHours(0, 0, 0, 0) !== today.setHours(0, 0, 0, 0)) {
		return `${datetime.toLocaleDateString()} ${time}`;
	}

	return time;
};

export default parseDate;
