// This commands requires 1 package
const Discord = require('discord.js'); // We need this to form & send embeds.

// Command Handler
exports.run = async (client, message, args) => {

    const useruser = 'Command ran by: ' + message.author.username;
    const userurl = message.author.avavtarURL;

    // Forming the embed
    let embed = new Discord.RichEmbed() // Remember to use .MessageEmbed() if you use the master version
        .setColor(0x43f033)
        .setDescription(`Loading...`)
        .setTimestamp()
    message.channel.send(embed).then(message => {
        embed.setColor(0x43f033)
        embed.setDescription(`:ping_pong: Pong! **\`${client.pings[0]}ms\`**`)
        embed.setFooter(useruser, userurl)
        embed.setTimestamp()
        message.edit(embed)
    })

} 
