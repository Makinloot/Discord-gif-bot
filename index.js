const express = require('express');
const app = express();
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`running at ${PORT}`));
require('dotenv').config();

client.login(process.env.BOTKEY); // makes bot online
client.on('messageCreate', sendGif); // calls for sendGif function on message

async function sendGif(msg) {
    const searchTerm = msg.content.split(' ');
    try {
        if(searchTerm[0] === '!gif') {
            let keyword;
            if(searchTerm.length > 1) {
                keyword = searchTerm.slice(1, searchTerm.length).join(' ');
            }
            const gifUrl = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.APIKEY}&contentfilter=off`;
            
            const response = await fetch(gifUrl);
            const data = await response.json();
            const index = Math.floor(Math.random() * data.results.length)
            msg.channel.send(data.results[index].url);
        }        
    } catch (error) {
        msg.channel.send('Gif not found :woozy_face:');
    }

}