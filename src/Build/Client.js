const color = require('chalk');

const Discord = require('discord.js');

const Command = require('./Command.js');

const Event = require('./Event.js');

const config = require('../Data/config.json');

const intents = new Discord.Intents(3847);

const fs = require('fs');

class Client extends Discord.Client {
	constructor() {
		super({
			intents,
		});

		/**
         * @type {Discord.Collection<string, Command>}
         */
		this.commands = new Discord.Collection();

		this.prefix = config.prefix;
	}

	start(token) {
		fs.readdirSync('./src/Commands')
			.filter(file => file.endsWith('.js'))
			.forEach(file => {
				/**
                 * @type {Command}
                 */
				const command = require(`../Commands/${file}`);
				console.log(color.greenBright(` \n ✅ ${command.name}`));
				this.commands.set(command.name, command);
			});

		fs.readdirSync('./src/Events')
			.filter(file => file.endsWith('.js'))
			.forEach(file => {
				/**
                 * @type {Event}
                 */
				const event = require(`../Events/${file}`);
				console.log(color.blueBright(`\n ✔ ${event.event}`));
				this.on(event.event, event.run.bind(null, this));
			});

		this.login(token);
	}
}

module.exports = Client;