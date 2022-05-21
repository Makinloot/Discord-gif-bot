require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config();

client.login(process.env.BOTKEY);
client.on('messageCreate', sendGif);

function sendGif(msg) {
    if(msg.content === 'hi') {
        console.log('red');
    }
}