const color = require('chalk');

const Event = require('../Build/Event.js');

module.exports = new Event('ready', client => {
	console.log(color.cyan.bold('\n Online'));
	client.user.setActivity('Luxoral', {
		type: 'COMPETING',
	});
	client.user.setUsername('Luxoral-Mite');
});