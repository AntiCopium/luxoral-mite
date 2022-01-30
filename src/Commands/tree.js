const Command = require('../Build/Command.js');

const Discord = require('discord.js');

module.exports = new Command({
	name: 'tree',
	description: 'Displays the evolution tree of luxoral.',
	permission: 'SEND_MESSAGES',

	async run(message) {
		try {

			const embed = new Discord.MessageEmbed();
			embed
				.setTitle('Evolution Tree')
				.setDescription('Evolution Tree. Made by: `SuperBirdyFlee#4142`')
				.setColor('RANDOM')
				.setImage('https://cdn.discordapp.com/attachments/508794586752352258/934635875793535036/lux_tree_3.png');

			message.reply({
				embeds: [embed],
			});

		} catch (e) {
			message.reply('An error occurred.');
		}
	},
});