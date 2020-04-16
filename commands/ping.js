// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

const {RichEmbed} = require('discord.js'); 

exports.run = async (client, message, args) => {

    let embed = new RichEmbed() 
        .setColor(0x43f033)
        .setDescription(`Loading...`)
        .setTimestamp()
    message.channel.send{(embed}).then(message => {
        embed.setColor(0x43f033)
        embed.setDescription(`:ping_pong: Pong! **\`${client.pings[0]}ms\`**`)
        embed.setFooter(`Command ran by ${message.author.username}`, message.author.avavtarURL)
        embed.setTimestamp()
        message.edit({embed})
    })

} 
