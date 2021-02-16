require('dotenv').config()
const Client = require('./structures/NadeChan')
const client = new Client();
client.once('ready', () => {
	console.log('Ready!');
});
//client.registry.registerDefaults()
client.init()