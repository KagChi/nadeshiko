const { Shoukaku } = require('shoukaku');
const { nodes } = require('../config.json')
module.exports = class nadePlayer {
  constructor(client) {
    this.client = client
    this.manager = new Shoukaku(this.client, nodes, {
      moveOnDisconnect: true,
      resumable: true,
      reconnectTries: 2,
      restTimeout: 10000
    }).on('ready', (name) => console.log(`Lavalink ${name}: Ready!`))
      .on('error', (name, error) => console.error(`Lavalink ${name}: Error Caught,`, error))
      .on('close', (name, code, reason) => console.warn(`Lavalink ${name}: Closed, Code ${code}, Reason ${reason || 'No reason'}`))
      .on('disconnected', (name, reason) => console.warn(`Lavalink ${name}: Disconnected, Reason ${reason || 'No reason'}`));
  }
  async playMusic(msg, song) {
    const node = this.manager.getNode()
    const player = await node.joinVoiceChannel({
      guildID: msg.guild.id,
      voiceChannelID: msg.member.voice.channelID
    });
    await player.playTrack(song.track); 
  }
  /**
   *@param {string} query
  */
  async getSongs(query) {
    const node = this.manager.getNode()
    const track = await node.rest.resolve(query)
    return track
  }
}