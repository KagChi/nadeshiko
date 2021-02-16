const { Command } = require('discord.js-commando');

module.exports = class PlayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'play',
			group: 'music',
			memberName: 'play',
			description: 'Play music.',
			userPermissions: ['CONNECT', 'SPEAK'],
			args: [
				{
					key: 'query',
					prompt: 'What video would you like to play? Either a URL or search query.',
					type: 'string'
				}
			]
		});
	}

	async run(message, { query }) {
	  const track = await this.client.player.getSongs(query)
	  await this.client.player.playMusic(message, track.tracks[0])
		//return message.say('Meow!');
	}
};
