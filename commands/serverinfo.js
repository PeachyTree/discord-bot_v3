// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

const {RichEmbed} = require('discord.js');

exports.run = async (client, message, args) => {

    let embed = new RichEmbed() 
        .setDescription('Server Info')
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL)
        .addField('Server Name', message.guild.name)
        .addField('Created on', message.guild.createdAt)
        .addField('You joined', message.member.joinedAt)
        .addField('Total Members', message.guild.memberCount);
    message.channel.send({embed});

} 
