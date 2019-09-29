'use strict';

module.exports = () => {
	const protocol = '(?:(?:http|https)://)?';
	const subdomain = '(?:www.)?';
	const domain = '(?:disco|discord|discordapp).(?:com|gg|io|li|me|net|org)';
	const path = '(?:/(?:invite))?/([a-z0-9-.]+)';

	const regex = `(${protocol}${subdomain}(${domain}${path}))`;

	return new RegExp(regex, 'i');
};
