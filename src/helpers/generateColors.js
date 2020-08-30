/* eslint-disable no-plusplus */

/**
 * Generate random light color
 * @return {string} Hex color
 */
export const getRandomColor = () => {
	const letters = 'BCDEF'.split('');
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
};

/**
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 *
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} color hexcolor value
 * @return {String} The contrasting color (black or white)
 */
export const getContrast = (hex) => {
	let color = hex;

	// If a leading # is provided, remove it
	if (color.slice(0, 1) === '#') {
		color = color.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (color.length === 3) {
		color = color
			.split('')
			.map((char) => char.repeat(2))
			.join('');
	}

	// Convert to RGB value
	const r = parseInt(color.substr(0, 2), 16);
	const g = parseInt(color.substr(2, 2), 16);
	const b = parseInt(color.substr(4, 2), 16);

	// Get YIQ ratio
	const yiq = (r * 299 + g * 587 + b * 114) / 1000;

	// Check contrast
	return yiq >= 128 ? 'black' : 'white';
};

/**
 * Generate and return color and contrast color
 * @typedef {string} color - Hex color
 * @typedef {string} textColor - Hex contrast color
 * @returns {[color, textColor]} Return array of colors
 */
export const getColorWithTextContrast = () => {
	const color = getRandomColor();
	const textColor = getContrast(color);

	return [color, textColor];
};
