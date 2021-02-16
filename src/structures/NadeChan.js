const { Client } = require('discord.js-commando');
const { Intents } = require('discord.js');
const { join } = require('path');
const Player = require('./NadePlayer')
module.exports = class NadeChan extends Client {
  constructor() {
    super({
      owner:'499021389572079620',
      commandPrefix: 'n!',
      fetchAllMembers: true,
      ws: { intents: Intents.ALL, properties: { $browser: "Discord iOS"} },
      partials: ["REACTION", "MESSAGE", "CHANNEL","GUILD_MEMBER", "USER"],
    })
    this.player = new Player(this);
  }
  init() {
    this.registry.registerDefaultTypes()
    this.registry.registerGroups([
      ['music', 'Music'],
      ['fun', 'Fun']
    ])
    this.registry.registerCommandsIn(join(__dirname,'..', 'commands'));
    //this.registry.registerDefaults()
    this.login()
  }
}