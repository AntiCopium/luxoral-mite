const Command = require('../Build/Command');

const axios = require('axios');

const Discord = require('discord.js');

const doc = require('../Data/luxoral-animal_doc.json');

module.exports = new Command({
	name: 'animal',
	description: 'animal test',
	permission: 'SEND_MESSAGES',
	async run(message, args) {
		try {
			args.map((s, i) => args[i] = s.charAt(0).toUpperCase() + s.slice(1));
			const time = doc.time;
			const sprites = (await axios.get('https://luxoral-prime.netlify.app/sprites.json')).data.creatures;
			const creature = sprites[args.slice(1).join(' ')];
			const url = `https://luxoral-prime.netlify.com/costume/${creature.biome}/${creature.costumes[0]}.png`;
			const desc = (await axios.get('https://luxoral-prime.netlify.app/creatures.json')).data;
			const author = message.author.username;
			const authorimg = message.author.avatarURL();
			const embedtxt = ' : CapThat#7448';
			console.log('\n' + author + ' Used api!');
			const arr = desc[args.slice(1).join(' ')].split(' ');
			let txt = '';
			let count = 0;
			arr.forEach(s => {
				if (count < 7) {
					txt += s + ' ';
					count += s.length;
				}
				else {
					txt += s + '\n';
					count = 0;
				}
			});

			const embed = new Discord.MessageEmbed();
			embed
				.setTitle(args.slice(1).join(' ') + ' A.P.I Fetched')
				.setDescription('**Result:**\n')
				.setColor('RANDOM')
				.setImage(url)
				.setFooter(author + embedtxt, authorimg)
				.addFields({
					name: 'Description',
					value: '`' + txt + '`',
					inline: true,
				}, {
					name: 'Tier',
					value: '`' + creature.tier + '`',
					inline: true,
				}, {
					name: 'Time',
					value: '`' + time + '`',
					inline: true,

				});

			message.reply({
				embeds: [embed],
			});
		}
		catch (err) {
			const msg = await message.channel.send('An error has occurred! (Check Spellings ex. Clown Sniffler)');
			message.delete();
			setTimeout(() => msg.delete(), 8000);
		}

	},
});