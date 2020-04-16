// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

const math = require('mathjs');
const {RichEmbed} = require('discord.js');

exports.run = (client, message, args, tools) => {

    if (!args[0]) return message.channel.send('Please input a calculation.');
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Please input a valid calculation.');
    }

    const embed = new RichEmbed()
        .setColor(0xffffff)
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
        .addField('Output', `\`\`\`js\n${resp}\`\`\``)
    message.channel.send({embed});

}
