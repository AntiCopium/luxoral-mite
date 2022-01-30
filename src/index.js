console.clear();

const Client = require('./Build/Client.js');

const config = require('./Data/config.json');

const client = new Client();

client.start(config.token);