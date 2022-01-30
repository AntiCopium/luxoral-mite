const Command = require('../Build/Command.js');

module.exports = new Command({
	name: 'hello',
	description: 'Hello!',
	permission: 'SEND_MESSAGES',
	async run(message) {
		message.reply('Hello!');
	},
});