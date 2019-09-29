const test = require('ava');
const inviteRegex = require('../src');

test('match invites', (t) => {
	const i = [
		'https://discord.gg/2JY79nd',
		'http://discord.gg/2JY79nd',
		'discord.gg/2JY79nd'
	];

	for (const x of i) {
		t.true(inviteRegex().test(x));
	}
});

test('match invites in text', (t) => {
	const i = [
		'Join my server at https://discord.gg/2JY79nd',
		'http://discord.gg/2JY79nd <= join',
		'My Server: discord.gg/2JY79nd\n\nCome check it out!'
	];

	for (const x of i) {
		t.true(inviteRegex().test(x));
	}
});

test('do not match non-invite URLs', (t) => {
	const i = [
		'https://discord.gg/',
		'http://discord.gg/',
		'discord.gg/'
	];


	for (const x of i) {
		t.false(inviteRegex().test(x));
	}
});
